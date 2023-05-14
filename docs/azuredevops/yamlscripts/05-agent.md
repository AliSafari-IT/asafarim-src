---
sidebar_position: 5
title: "Agent in YAML pipeline"
---

## Agent
The agent is responsible for running the pipeline's jobs and tasks, and must have the necessary software and dependencies installed to execute the tasks. The agent is specified in the YAML file using the pool keyword.

Here's an example of how to define an agent in a pipeline YAML file:

```yaml
pool:
  vmImage: 'ubuntu-latest'
```
In this example, the pool section of the pipeline's YAML file specifies that the pipeline should use a cloud-hosted virtual machine with the ubuntu-latest image installed as the agent. This means that the pipeline's jobs and tasks will be executed on this virtual machine.

## Self-hosted agent
You can also use a self-hosted agent instead of a cloud-hosted agent. A self-hosted agent is a machine that you control and manage, and that is used to run the pipeline's jobs and tasks. To use a self-hosted agent, you would need to install the necessary dependencies and software on the agent machine, and then specify the agent in the YAML file using the pool keyword and the agent machine name.

Here's an example of how to define a self-hosted agent in a pipeline YAML file:

```yaml
pool:
  name: MySelfHostedAgent
```
In this example, the pool section of the pipeline's YAML file specifies that the pipeline should use a self-hosted agent with the name MySelfHostedAgent. This means that the pipeline's jobs and tasks will be executed on the machine with that name.

You can use a self-hosted agent in Azure Pipelines when you want to execute pipeline jobs and tasks on a machine that you control and manage. Self-hosted agents are typically used when you need to:

<table>
  <thead>
    <tr>
      <th>Reasons for using a self-hosted agent</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Access resources that are not available in cloud-hosted agents</td>
    </tr>
    <tr>
      <td>Meet security and compliance requirements</td>
    </tr>
    <tr>
      <td>Improve performance and reduce costs</td>
    </tr>
  </tbody>
</table>

### In details
-   Access resources that are not available in cloud-hosted agents: If your pipeline requires access to resources that are not available in cloud-hosted agents, such as file shares, databases, or specialized hardware, you can use a self-hosted agent to access those resources.

-   Meet security and compliance requirements: If you have strict security or compliance requirements that dictate where your code and build artifacts can be stored and processed, you can use a self-hosted agent to ensure that your pipeline jobs and tasks are executed on a machine that meets your requirements.

-   Improve performance and reduce costs: If you have a large or complex codebase, or if your pipeline requires a lot of compute resources to execute, you can use a self-hosted agent to improve performance and reduce costs by running the pipeline jobs and tasks on machines that you already own and manage.

-   Setting up a self-hosted agent requires installing the Azure Pipelines agent software on a machine that you control and then registering the agent with your Azure DevOps organization or TFS server. Once the agent is registered, you can use it in your pipeline YAML files by specifying the pool keyword and the name of the self-hosted agent.
