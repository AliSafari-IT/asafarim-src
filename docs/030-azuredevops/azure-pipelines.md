---
sidebar_position: 3
title: "Azure Pipelines"
---

## When we can use Azure Pipelines?
-  Continuous integration and continuous deployment (CI/CD): You can use Azure Pipelines to build, test, and deploy your applications automatically after every code change.
-  Multi-platform builds: Azure Pipelines supports building and deploying applications on Windows, Linux, and macOS.
-  Container builds: You can use Azure Pipelines to build and push Docker containers to a container registry.
-  Cloud deployments: You can use Azure Pipelines to deploy your applications to Azure or other cloud providers.
-  On-premises deployments: Azure Pipelines can also be used to deploy your applications to on-premises servers or other environments.

In general, Azure Pipelines is a powerful tool that can be used for any scenario that involves building, testing, and deploying applications.

## How data flows through the CI/CD scenarios?
In a typical CI/CD scenario, data flows through various stages as follows:

### 1. Source control stage
Developers write code and store it in a source control repository, such as Azure Repos.
### 2. Build stage
When a new code change is checked in, the build process begins. Azure Pipelines retrieves the code from the source control repository and builds it into an executable package. The build process can include compiling code, running automated tests, and creating artifacts.
### 3. Release stage
Once the build is complete, the release process begins. This stage involves deploying the application to a target environment such as a test, staging, or production environment. Azure Pipelines can deploy to a variety of targets, including virtual machines, container clusters, and cloud services.
### 4. Testing stage
Once the application is deployed, automated tests are run to ensure that it is functioning correctly. These tests can include unit tests, integration tests, and end-to-end tests.
### 5. Monitoring stage
Finally, the application is monitored to ensure that it is performing well and meeting its service level objectives (SLOs). Azure provides a variety of monitoring tools that can be used to track performance metrics, troubleshoot issues, and analyze usage patterns.

>Overall, data flows through these stages in a continuous loop, with new changes triggering the build and release process again and again. This process helps ensure that applications are continuously updated, tested, and deployed with minimal manual intervention.

Ok, let's cap it up:
<table>
  <tr>
    <th>Stage</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Source Control</td>
    <td>Developers write code and store it in a source control repository.</td>
  </tr>
  <tr>
    <td>Build Pipeline</td>
    <td>When a new code change is checked in, the build process begins. The code is retrieved and built into an executable package.</td>
  </tr>
  <tr>
    <td>Release Pipeline</td>
    <td>The application is deployed to a target environment such as a test, staging, or production environment.</td>
  </tr>
  <tr>
    <td>Automated Testing</td>
    <td>Automated tests are run to ensure that the application is functioning correctly.</td>
  </tr>
  <tr>
    <td>Monitoring and Analytics</td>
    <td>The application is monitored to ensure that it is performing well and meeting its service level objectives (SLOs).</td>
  </tr>
</table>