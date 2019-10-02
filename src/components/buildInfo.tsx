// BuildInfo Component
import {useQuery} from "@apollo/react-hooks";
import {Build, GetBuildDataDocument, GetBuildDataQuery, GetBuildDataQueryVariables} from "../generated/graphql";
import {Bar, Line} from "react-chartjs-2";
import React from "react";
import GridLayout from "react-grid-layout";
import * as _ from "lodash";

export function BuildInfo() {
    const { loading, error, data } = useQuery<GetBuildDataQuery, GetBuildDataQueryVariables>(
        GetBuildDataDocument,
        {},
    );

    let buildsToday;
    let successRate;
    let successfulBuilds;
    let failedBuildData;
    let failedBuilds;
    const buildTimes: Array<{timestamp: Date, duration: number}> = [];
    if (loading) {
        return(<p>Loading ...</p>);
    } else if (error) {
        return(<p>Error =>{error}</p>);
    } else if (data) {
        if (data.Build) {
            const goodData = data.Build.filter(b => b && b.finishedAt);
            buildsToday = goodData.filter(b => b && Date.parse(b.timestamp as string) > (Date.now() - ((24 * 60 * 60 * 1000) * 180)));
            successRate = Math.round((buildsToday.filter(b => b && b.status === "passed").length / buildsToday.length) * 100);
            failedBuilds = buildsToday.filter(b => b && b.status === "failed").length;
            failedBuildData = buildsToday.filter(b => b && b.status === "failed");
            successfulBuilds = buildsToday.filter(b => b && b.status === "passed");
            buildsToday.forEach(b => {
                if (b && b.startedAt && b.finishedAt && b.timestamp) {
                    buildTimes.push({timestamp: new Date(b.timestamp), duration: Math.round((Date.parse(b.finishedAt) - Date.parse(b.startedAt)) / 1000)});
                }
            })
        }
    }
    const avgBuildTime = Math.round(buildTimes.map(b => b.duration).reduce((prev, curr) => curr += prev) / buildTimes.length);
    const sortedBuildTimes = [ ...buildTimes.map(b => b.duration).sort((a,b) => a - b)] ;
    const lowMiddle = Math.floor((sortedBuildTimes.length - 1) / 2);
    const highMiddle = Math.ceil((sortedBuildTimes.length - 1) / 2);
    const medianBuildTime = Math.round((sortedBuildTimes[lowMiddle] + sortedBuildTimes[highMiddle] / 2));

    const buildTimeGraph = {
        type: 'line',
        labels: buildTimes.map(b => b.timestamp.toDateString()).reverse(),
        datasets: [
            {
                label: "Build Times",
                fill: true,
                data: buildTimes.map(b => b.duration).reverse(),
                backgroundColor: 'rgb(255,140,74)',
            },
            {
                label: "Avg Build Time",
                fill: true,
                data: Array(buildTimes.length).fill(avgBuildTime),
                backgroundColor: 'rgb(201,255,76)',
            },
            {
                label: "Median Build Time",
                fill: true,
                backgroundColor: 'rgb(90,120,255)',
                data: Array(buildTimes.length).fill(medianBuildTime),
            }
        ],
    };

    const buildTimeGraphOptions = {
        title: {
            text: `Build Time Information (In Seconds)`,
            display: true,
        }
    };


    // Build Success plot
    const labels = failedBuildData && successfulBuilds ?
        _.uniq([...failedBuildData.map(b => new Date((b as Build).timestamp as string).toDateString()), ...successfulBuilds.map(b => new Date((b as Build).timestamp as string).toDateString())]).sort() :
        [];

    const failedData = failedBuildData ? failedBuildData.map(b => new Date((b as Build).timestamp as string).toDateString()) : [];
    const successData = successfulBuilds ? successfulBuilds.map(b => new Date((b as Build).timestamp as string).toDateString()) : [];

    const failedCounts: Record<string, number> = {};
    failedData.forEach(x => {
        if (x && failedCounts.hasOwnProperty(x)) {
            failedCounts[x] = failedCounts[x] + 1;
        } else {
            failedCounts[x] = 1;
        }
    });

    const successCounts: Record<string, number> = {};
    successData.forEach(x => {
        if (x && successCounts.hasOwnProperty(x)) {
            successCounts[x] = successCounts[x] + 1;
        } else {
            successCounts[x] = 1;
        }
    });

    const totalCount: Record<string, number> = {};
    Object.keys(failedCounts).forEach(d => {
        totalCount[d] = failedCounts[d];
    });
    Object.keys(successCounts).forEach(d => {
        if (totalCount.hasOwnProperty(d)) {
            totalCount[d] = totalCount[d] + successCounts[d];
        } else {
            totalCount[d] = successCounts[d];
        }
    });

    const buildSuccessfulnessGraph = {
        type: 'line',
        labels,
        datasets: [
            {
                label: "Success",
                fill: false,
                data: _.sortBy(Object.keys(successCounts).filter(s => successCounts[s] !== null).map(s => ({x: s, y: successCounts[s]})), "x"),
                backgroundColor: 'rgb(255,140,74)',
            },
            {
                label: "Failed",
                fill: false,
                data: _.sortBy(Object.keys(failedCounts).filter(s => failedCounts[s] !== null).map(f => ({x: f, y: failedCounts[f]})), "x"),
                backgroundColor: 'rgb(201,255,76)',
            },
            {
                label: "Total",
                fill: false,
                data: _.sortBy(Object.keys(totalCount).map(t => ({x: t, y: totalCount[t]})), "x"),
                backgroundColor: 'rgb(246,121,255)',
            },
        ],
    };

    console.log(JSON.stringify(buildSuccessfulnessGraph, undefined, 2));

    const buildSuccessfulnessGraphOptions = {
        title: {
            text: `Build Success/Failure Over Time`,
            display: true,
        }
    };

    const overViewBuildGraph = {
        labels: ['Build Information'],
        datasets: [
            {
                label: "Failed Builds",
                backgroundColor: 'rgb(255, 99, 132)',
                data: [failedBuilds],
            },
            {
                label: "Success Builds",
                backgroundColor: 'rgb(255,140,74)',
                data: [buildsToday && buildsToday.filter(b => b && b.status === "passed").length],
            },
            {
                label: "Total Builds",
                backgroundColor: 'rgb(100,255,147)',
                data: [buildsToday && buildsToday.length],
            }
        ],
    };

    const overviewBuildGraphOptions = {
        title: {
            display: true,
            text: "Build Summary",
        }
    }


    const percentageGraphData = {
        datasets: [
            {
                label: "Failed Builds",
                backgroundColor: 'rgb(255, 99, 132)',
                data: [100 - (successRate || 0)],
            },
            {
                label: "Successful Builds",
                backgroundColor: 'rgb(255,140,74)',
                data: [successRate],
            },
        ],
    };
    const percentageGraphOptions = {
        title: {
            display: true,
            text: `Build Summary (%)`,
        },
        scales: {
            xAxes: [{ stacked: true }],
            yAxes: [{ stacked: true }]
        }
    };

    return (
        <div>
            <h1>Build Information</h1>
            <GridLayout className="buildInfo" cols={20} rowHeight={30} width={1800}>
                <div key="c" data-grid={{x: 0, y: 0, w: 2, h: 2}}>
                    <h3>Overall Success Rate</h3>
                    <span>{successRate}%</span>
                </div>
                <div key="b" data-grid={{x: 2, y: 2, w: 6, h: 7}}>
                    <Bar data={overViewBuildGraph} options={overviewBuildGraphOptions}/>
                </div>
                <div key="bb" data-grid={{x: 0, y: 8, w: 6, h: 6}}>
                    <Line data={buildTimeGraph} options={buildTimeGraphOptions}/>
                </div>
                <div key="d" data-grid={{x: 8, y: 2, w: 6, h: 7}}>
                    <Bar data={percentageGraphData} options={percentageGraphOptions}/>
                </div>
                <div key="failed" data-grid={{x: 7, y: 11, w: 6, h: 6}}>
                    <Line data={buildSuccessfulnessGraph} options={buildSuccessfulnessGraphOptions}/>
                </div>
            </GridLayout>
        </div>
    );
}
