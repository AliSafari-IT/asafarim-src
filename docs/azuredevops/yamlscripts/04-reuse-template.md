---
sidebar_position: 4
title: "Re-use YAML templates"
---

## How to reuse a YAML template in Azure DevOps
Follow the example below:
### 1.  Create a YAML template file
Let's say you want to create a reusable template for building and testing a Node.js application. You can create a YAML file called nodejs-build-test.yml with the following contents:
```yaml
# nodejs-build-test.yml

parameters:
  nodeVersion: string

jobs:
  - job: BuildAndTest
    pool:
      vmImage: 'ubuntu-latest'
    steps:
    - task: NodeTool@0
      inputs:
        versionSpec: ${{ parameters.nodeVersion }}
      displayName: 'Install Node.js'
    - script: npm install
      displayName: 'Install dependencies'
    - script: npm run build
      displayName: 'Build project'
    - script: npm run test
      displayName: 'Run tests'
```

This YAML template defines a parameter called nodeVersion, which specifies the version of Node.js to use for building and testing the application. The template then defines a job called BuildAndTest, which installs Node.js, installs dependencies, builds the project, and runs tests.

### 2.  Use the YAML template in a pipeline
You can use the template keyword to include the nodejs-build-test.yml template in a pipeline. Here's an example of a pipeline that uses the template:
```yaml
# azure-pipelines.yml

trigger:
  - main

jobs:
  - job: BuildAndTestNodeApp
    displayName: 'Build and test Node.js app'
    pool:
      vmImage: 'ubuntu-latest'
    steps:
    - template: nodejs-build-test.yml
      parameters:
        nodeVersion: '14.x'
```
This pipeline triggers on the main branch, and defines a job called BuildAndTestNodeApp. The job uses the nodejs-build-test.yml template by including it with the template keyword. The nodeVersion parameter is set to 14.x, which specifies that the latest version of Node.js 14 should be used for building and testing the application.

When this pipeline runs, the steps defined in the template will be executed as part of the pipeline, with the specified Node.js version and any other parameter values that are passed in. You can reuse this pipeline with different parameter values or on different branches, without having to copy and paste the steps each time.


