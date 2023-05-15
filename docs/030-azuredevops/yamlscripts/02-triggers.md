---
sidebar_position: 2
title: "Triggers in YAML pipelines"
---

## info
In YAML pipelines, triggers are used to specify the events that can trigger a pipeline run. There are different types of triggers available in YAML pipelines, including:

### Push triggers
These triggers are used to start a pipeline run when changes are pushed to the repository branch that the pipeline is configured to monitor.
### Pull request triggers
These triggers are used to start a pipeline run when a pull request is created or updated in the repository branch that the pipeline is configured to monitor.
### Scheduled triggers
These triggers are used to start a pipeline run at a specified time or on a specified schedule.

```yaml title="Example YAML Pipeline with Multiple Triggers and Path Filters"
trigger:
  branches:
    include:
    - master
    - releases/*
  paths:
    include:
    - src/**
    exclude:
    - src/**/tests/**
  tags:
    include:
    - v*
```
:::info Description
In this example, the trigger is configured to start a pipeline run when changes are pushed to the *master* branch or any branch that starts with *releases/*. The trigger is also configured to include changes to files in the *src/* directory and its subdirectories, but exclude changes to files in *src/**/tests/* directories. Finally, the trigger is configured to include tags that start with *v*.
:::
