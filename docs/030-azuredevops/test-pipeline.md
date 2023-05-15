---
sidebar_position: 2
title: "Testing pipeline"
---
## How to test a pipeline  in Azure DevOps
You can test a pipeline in Azure DevOps by creating a new pipeline and setting up the pipeline to run on a small, representative subset of your codebase. This allows you to test the pipeline without running it on your entire codebase, which can save time and resources.

Here are the general steps to test a pipeline:
<table>
  <thead>
    <tr>
      <th>Step</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Create a new pipeline in Azure DevOps</td>
      <td>Go to your project in Azure DevOps and click on the "Pipelines" tab. Click on "New pipeline" and follow the prompts to create a new pipeline.</td>
    </tr>
    <tr>
      <td>Configure the pipeline</td>
      <td>Once you have created the pipeline, configure it to run on a subset of your codebase. You can do this by specifying the branch or path filters in the pipeline's YAML file.</td>
    </tr>
    <tr>
      <td>Run the pipeline</td>
      <td>Run the pipeline on the subset of your codebase. This will allow you to test the pipeline without running it on the entire codebase.</td>
    </tr>
    <tr>
      <td>Review the results</td>
      <td>Once the pipeline has completed running, review the results and make any necessary changes to the pipeline configuration.</td>
    </tr>
    <tr>
      <td>Iterate</td>
      <td>Repeat steps 2-4 until you are satisfied with the pipeline's performance.</td>
    </tr>
  </tbody>
</table>

In addition to testing the pipeline in Azure DevOps, you can also use local development environments or continuous integration tools to test the pipeline before deploying it to production.