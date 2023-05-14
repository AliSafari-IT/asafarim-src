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

## YAML templates across Azure DevOps projects
To reuse YAML templates across Azure DevOps projects, you can use the following steps:

###   1. Create a YAML template in a Git repository
Create a YAML template file in a Git repository that is accessible to all the Azure DevOps projects that you want to reuse the template in. You can create a new Git repository in Azure DevOps or use an existing repository.

###   2. Reference the YAML template in pipelines
In each Azure DevOps project where you want to reuse the template, reference the YAML template in your pipeline YAML files using the template keyword and the Git repository URL and path to the template file. 

Here's an example:
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
    - template: https://github.com/MyOrganization/MyRepo/nodejs-build-test.yml@main
      parameters:
        nodeVersion: '14.x'

```
In this example, the template keyword is used to reference the nodejs-build-test.yml template file in the MyRepo repository in the MyOrganization organization. The @main suffix indicates that the pipeline should use the main branch of the Git repository.

###   3. Grant permission to access the Git repository
Make sure that all the Azure DevOps projects that need to access the Git repository where the YAML template is stored have permission to access the repository. You can manage repository permissions in the Azure DevOps project settings.

By following these steps, you can reuse the same YAML template across multiple Azure DevOps projects, which can save time and reduce duplication of effort. Any changes to the YAML template in the Git repository will be automatically reflected in all the pipelines that reference the template.


:::note 1
In Azure DevOps, permissions are inherited from the project level down to the repository level. This means that if you grant a user or group permission to the project, they will automatically have permission to all the repositories in the project. If you want to restrict access to a specific repository, you will need to remove the user or group from the project-level permissions and grant them permissions at the repository level instead.
:::


:::note 2
Similarly, permissions are inherited from the repository level down to the branch level. This means that if you grant a user or group permission to a repository, they will automatically have permission to all the branches in the repository. If you want to restrict access to a specific branch, you will need to remove the user or group from the repository-level permissions and grant them permissions at the branch level instead.
:::

:::note 3
To avoid accidentally granting unnecessary permissions to users or groups, it's important to carefully manage permissions at each level of the hierarchy and only grant the permissions that are required for each user or group to do their job.
:::
