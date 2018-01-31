# Flex-Grid

## Quick Start

To run locally:
1. `yarn install` or `npm install`
1. `yarn start` or `npm start`

## Tooling Choices

My approach to tooling/framework selection is to only add stuff if necessary. As I add frameworks I'll document them here.

### The Tools

1. **Project Boiler Plate** - This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). I looked into Fountain.js/Yeoman, but as far as spinning up a React app with no build config, I think CRA is the simplest/fastest.
1. **Framework - React** - The alternative approach I was thinking about was using [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) to build an appropriate element and just write a quick script to make the data available to the element. I chose `React` for the following reasons:
  - *Readability* - More people are familiar with React than web components, including myself. I am all for stepping outside of my comfort zone, but doing so under a tight deadline isn't appropriate.
  - *Convention Over Configuration* - It's quicker to get started with React. Things like testing frameworks are already bundled in.
  - *Performance Is Not an Issue at this Point* - Page speed is an issue, especially at scale. But for the purposes of this project, I'm making the reasonable assumption that React is good enough. I'd be interested to see how performant React is compared to Custom Web Components.
  