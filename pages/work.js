import Layout from '../components/Layout';
import styled from 'styled-components'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import React, { Component } from 'react'

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

// TODO: find a nice way to present this
export default function WorkSkills() {

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
                    flex-direction: row;
                    justify-content: center;
                }
            `}</style>
            <div id="buttons">
                <Button id="skills">Skills</Button>
                <Button id="work">Work</Button>
            </div>
            <div>
                
            </div>
        </div>
    </Layout>
    );
}