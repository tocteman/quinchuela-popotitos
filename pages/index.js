import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import Head from 'next/head'
import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player';

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
      h1 {
        font-family: "monospaced"
      }
    `}</style>
  </li>
)

export default function Blog() {
  return (
    <div>
    <Head>
      <title>Popotitos & Quinchuela</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <style dangerouslySetInnerHTML={{__html: `
          @font-face {
            font-family: 'Roboto Mono';
            font-weight: 300;
            src: url('/static/robotomono-regular-webfont.woff') format('woff');
        }
        `}}/>
      </Head>
    <Layout>
      <h2>Quinchuela & Popotitos</h2>
      <ReactAudioPlayer src="http://167.99.13.29:8001/stream" autoPlay controls/>
      <style jsx>{`
        h2,
        a {
          font-family: 'Roboto Mono', monospaced;
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
    </div>
  )
}