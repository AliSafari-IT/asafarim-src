---
sidebar_position: 3
title: "YAML templates"
---

## Pipeline structure and configuration
It is not possible to define YAML logic at pipeline runtime. YAML is a markup language used for defining the structure and configuration of pipelines, and it needs to be defined before the pipeline is executed.
However, you can use YAML templates to define reusable logic that can be included in multiple pipelines. YAML templates are essentially reusable YAML files that can be included in pipelines using the template keyword.

```yaml
# Define the YAML template
# my-template.yml
parameters:
- name: myParam
  type: string
- name: myVar
  type: string

steps:
- script: echo ${{ parameters.myVar }}
  displayName: 'Print myVar'
- script: echo ${{ parameters.myParam }}
  displayName: 'Print myParam'

# Define the pipeline that uses the YAML template
# my-pipeline.yml
trigger:
- main

jobs:
- job: MyJob
  steps:
  - template: my-template.yml
    parameters:
      myParam: 'Hello, World!'
      myVar: 'My variable value'

```
:::note Using YAML Templates for Reusable Logic in Azure Pipelines
In this example, the my-template.yml file defines a YAML template with two parameters and two steps. The my-pipeline.yml file uses the template keyword to include the my-template.yml file in a pipeline, and also provides values for the template parameters. When the pipeline runs, the steps defined in the template will be executed as part of the pipeline.
:::
