import Layout from '../components/Layout';
import styled from 'styled-components'
import React, { Component } from 'react'
import { Bank } from '@styled-icons/remix-line/Bank'
import { ShoppingBag } from '@styled-icons/boxicons-regular/ShoppingBag'
import { School } from '@styled-icons/material-outlined/School'

const Button = styled.button`
    & {
      display: inline-block;
      color: #703A4B;
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid #703A4B;
      border-radius: 3px;
      display: block;
    }

    &:active {
        background-color: #C5AEB5;
        color: #3A1E26;
        border: 2px solid #3A1E26;
      }

`;

export async function getStaticProps() {

    const jobs = require('../content/work-history.json');
    // jobs = jobs.json()

    return {
        props: {
            jobs,
        },
    }
}

function JobLogo({logo}){
    switch(logo) {
        case "Bank":
            return(
                <Bank size="50" color="grey"/>
            )
        case 'Retail':
            return(
               <ShoppingBag size="50" color="grey"/>
            )
        case 'School':
            return(
                <School size="50" color="grey" />
            )
        case 'default':
            return(
                <p>No Logo Provided</p>
            )
        default:
            return(
                <p>No Logo Provided</p>
            )

    }
}

// TODO: find a nice way to present this
function Work({jobs}) {

    return (
    <Layout>
        <div>
            <style jsx>{`
                #buttons {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    padding: 2em;
                }
                #content {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                h3 {
                    font-family: Arial;
                }
                .job {
                    padding: 1em;
                }
                .job p {
                    // put text styles here
                }
            `}</style>
            <h3>Work History</h3>
            <div id="content">
                {
                    jobs.map(job => (
                        <div className="job">
                            <JobLogo logo={job.logo}></JobLogo>
                            <p>{job.company}</p>
                            <p>{job.role}</p>
                            <p>{job.date}</p>
                            <p>{job.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </Layout>
    );
}

export default Work