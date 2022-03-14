export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "nuxt5aec96c7": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "nuxt": {
            "ServiceName": "string",
            "ClusterName": "string",
            "PipelineName": "string",
            "ContainerNames": "string",
            "GraphQLAPIEndpointOutput": "string"
        },
        "cicd": {
            "ServiceName": "string",
            "ClusterName": "string",
            "PipelineName": "string",
            "ContainerNames": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "hosting": {
        "ElasticContainer": {
            "ServiceName": "string",
            "ClusterName": "string",
            "PipelineName": "string",
            "ContainerNames": "string",
            "PipelineUrl": "string",
            "LoadBalancerAliasDomainName": "string",
            "LoadBalancerCnameDomainName": "string",
            "CloudfrontDistributionAliasDomainName": "string",
            "CloudfrontDistributionCnameDomainName": "string"
        }
    }
}