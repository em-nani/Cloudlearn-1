export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "nuxteba7f827": {
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
        "cicd": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
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