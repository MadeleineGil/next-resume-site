import Layout from '../components/Layout';
import styled from 'styled-components'
import React, { Component } from 'react'
import { Bank } from '@styled-icons/remix-line/Bank'
import { ShoppingBag, CodeCurly } from '@styled-icons/boxicons-regular'
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
    const volunteers = require('../content/volunteering.json');

    return {
        props: {
            jobs,
            volunteers,
        },
    }
}

function Logo({logo}){
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
        case 'Tech':
            return(
                <CodeCurly size="50" color="grey" />
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
function Work({jobs, volunteers}) {

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
                .content {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    flex-wrap: wrap;
                    justify-content: space-evenly;
                }
                h3 {
                    // font-family: Arial;
                }
                .item {
                    padding: 1em;
                    backdrop-filter: blur(2px);
                }
                .item p {
                    // font-family: Arial;
                }
            `}</style>
            <h3>Employment History</h3>
            <div className="content">
                {
                    jobs.map(job => (
                        <div className="item">
                            <Logo logo={job.logo}></Logo>
                            <p>{job.company}</p>
                            <p>{job.role}</p>
                            <p>{job.date}</p>
                            <p>{job.description}</p>
                        </div>
                    ))
                }
            </div>
            <h3>Volunteering</h3>
            <div className="content">
                {
                    volunteers.map(volunteer => (
                        <div className="item">
                            <Logo logo={volunteer.logo}></Logo>
                            <p>{volunteer.organisation}</p>
                            <p>{volunteer.role}</p>
                            <p>{volunteer.date}</p>
                            <p>{volunteer.description}</p>
                        </div>
                    ))
                }
            </div>
            <h3>Projects</h3>
            <div className="content">
                <p>Add Projects worked on and links to pdfs or github etc </p>
                {/* {
                    volunteers.map(volunteer => (
                        <div className="item">
                            <Logo logo={volunteer.logo}></Logo>
                            <p>{volunteer.organisation}</p>
                            <p>{volunteer.role}</p>
                            <p>{volunteer.date}</p>
                            <p>{volunteer.description}</p>
                        </div>
                    ))
                } */}
            </div>
        </div>
    </Layout>
    );
}

export default Work