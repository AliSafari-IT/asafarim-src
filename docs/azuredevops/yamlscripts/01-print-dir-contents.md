---
sidebar_position: 1
title: "Print directory contents"
---

## info

In this example, the name property is set to 'Print directory contents' for the Bash task. When the pipeline runs, this name will be displayed in the logs and in the pipeline's visual editor.

You can modify the name property to set a different name for the task.

```{7}
trigger:
- main

pool:
  vmImage: 'ubuntu-latest'

steps:
- name: 'Print directory contents'
  task: Bash@3
  inputs:
    targetType: 'inline'
    script: 'ls ./'
```


:::info
This will help you locate your files and figure out where you should run your commands.
:::
