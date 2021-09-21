const { default: createRow } = require("./createRow");

const fetchPlugins = async () => {
	// const response = await fetch('https://hackolade.com/versionInfo/pluginVersions.json');

	// return response.json();

	return {
		"plugins": [
			{
				"name": "Avro",
				"target": "Avro",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for Apache Avro Schema",
				"repository": "https://github.com/hackolade/Avro",
				"version": "0.1.73"
			},
			{
				"name": "BigQuery",
				"target": "BigQuery",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for Google BigQuery Standard SQL",
				"repository": "https://github.com/hackolade/BigQuery",
				"version": "0.1.0"
			},
			{
				"name": "Cassandra",
				"target": "CASSANDRA",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for Cassandra DataStax",
				"repository": "https://github.com/hackolade/Cassandra",
				"version": "0.1.85"
			},
			{
				"name": "CosmosDB-with-Gremlin-API",
				"target": "COSMOSDB-GREMLIN",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for Azure Cosmos DB with Gremlin API",
				"repository": "https://github.com/hackolade/CosmosDB-with-Gremlin-API",
				"version": "0.1.17"
			},
			{
				"name": "CosmosDB-with-Mongo-API",
				"target": "COSMOSDB-MONGO",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for Azure Cosmos DB with MongoDB API",
				"repository": "https://github.com/hackolade/CosmosDB-with-Mongo-API",
				"version": "0.1.25"
			},
			{
				"name": "CosmosDB-with-SQL-API",
				"target": "COSMOSDB-SQL",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for Azure Cosmos DB with SQL API",
				"repository": "https://github.com/hackolade/CosmosDB-with-SQL-API",
				"version": "0.1.28"
			},
			{
				"name": "DeltaLake",
				"target": "DeltaLake",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for Delta Lake on Databricks, including Azure Databricks, and Databricks on AWS",
				"repository": "https://github.com/hackolade/DeltaLake",
				"version": "0.1.16"
			},
			{
				"name": "Elasticsearch",
				"target": "ELASTICSEARCH",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for Elasticsearch",
				"repository": "https://github.com/hackolade/Elasticsearch",
				"version": "0.1.26"
			},
			{
				"name": "ElasticsearchV7plus",
				"target": "ELASTICSEARCHv7plus",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for Elasticsearch v7 and above",
				"repository": "https://github.com/hackolade/ElasticsearchV7plus",
				"version": "0.1.0"
			},
			{
				"name": "EventBridge",
				"target": "EventBridge",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for AWS EventBridge Schema Registry",
				"repository": "https://github.com/hackolade/EventBridge",
				"version": "0.1.13"
			},
			{
				"name": "Firebase",
				"target": "FIREBASE",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for RealTime Firebase",
				"repository": "https://github.com/hackolade/Firebase",
				"version": "0.1.4"
			},
			{
				"name": "Firestore",
				"target": "FIRESTORE",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for Cloud Firestore",
				"repository": "https://github.com/hackolade/Firestore",
				"version": "0.1.4"
			},
			{
				"name": "Glue",
				"target": "Glue",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for AWS Glue Data Catalog",
				"repository": "https://github.com/hackolade/glue",
				"version": "0.1.16"
			},
			{
				"name": "HBase",
				"target": "HBase",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for Apache HBase",
				"repository": "https://github.com/hackolade/HBase",
				"version": "0.1.15"
			},
			{
				"name": "Hive",
				"target": "HIVE",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for Apache Hive",
				"repository": "https://github.com/hackolade/Hive",
				"version": "0.1.62"
			},
			{
				"name": "JanusGraph",
				"target": "JanusGraph",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for JanusGraph",
				"repository": "https://github.com/hackolade/JanusGraph",
				"version": "0.1.1"
			},
			{
				"name": "Joi",
				"target": "JOI",
				"author": "Qwin",
				"authorRepo": "https://github.com/Qwin",
				"description": "Hackolade plugin for Joi",
				"repository": "https://github.com/Qwin/Joi",
				"version": "0.1.5"
			},
			{
				"name": "MariaDB",
				"target": "MariaDB",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for MariaDB",
				"repository": "https://github.com/hackolade/MariaDB",
				"version": "0.1.8"
			},
			{
				"name": "MarkLogic",
				"target": "MARKLOGIC",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for MarkLogic",
				"repository": "https://github.com/hackolade/MarkLogic",
				"version": "0.1.26"
			},
			{
				"name": "MonStor",
				"target": "MonStor",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for MonStor",
				"repository": "https://github.com/hackolade/MonStor",
				"version": "0.1.11"
			},
			{
				"name": "Neo4j",
				"target": "NEO4J",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for Neo4j",
				"repository": "https://github.com/hackolade/neo4j",
				"version": "0.1.31"
			},
			{
				"name": "Neptune-Gremlin",
				"target": "Neptune-Gremlin",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for Amazon Neptune with Gremlin API",
				"repository": "https://github.com/hackolade/neptune-gremlin",
				"version": "0.1.2"
			},
			{
				"name": "OpenAPI",
				"target": "OPENAPI",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for Swagger API",
				"repository": "https://github.com/hackolade/OpenAPI",
				"version": "0.1.34"
			},
			{
				"name": "Parquet",
				"target": "PARQUET",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for Apache Parquet schema",
				"repository": "https://github.com/hackolade/Parquet",
				"version": "0.1.3"
			},
			{
				"name": "Redshift",
				"target": "Redshift",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for Amazon Redshift",
				"repository": "https://github.com/hackolade/Redshift",
				"version": "0.1.3"
			},
			{
				"name": "ScyllaDB",
				"target": "ScyllaDB",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for ScyllaDB",
				"repository": "https://github.com/hackolade/ScyllaDB",
				"version": "0.1.29"
			},
			{
				"name": "Snowflake",
				"target": "Snowflake",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for Snowflake",
				"repository": "https://github.com/hackolade/Snowflake",
				"version": "0.1.36"
			},
			{
				"name": "SQLServer",
				"target": "MSSQLServer",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for Microsoft SQL Server and Azure SQL Database",
				"repository": "https://github.com/hackolade/SQLServer",
				"version": "0.1.29"
			},
			{
				"name": "Swagger",
				"target": "Swagger",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for Swagger API",
				"repository": "https://github.com/hackolade/Swagger",
				"version": "0.1.32"
			},
			{
				"name": "Synapse",
				"target": "Synapse",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for Azure Synapse (SQL Data Warehouse) and Parallel Data Warehouse",
				"repository": "https://github.com/hackolade/Synapse",
				"version": "0.1.26"
			},
			{
				"name": "TinkerPop",
				"target": "TinkerPop",
				"author": "hackolade",
				"authorRepo": "https://github.com/hackolade",
				"description": "Hackolade plugin for TinkerPop",
				"repository": "https://github.com/hackolade/tinkerpop",
				"version": "0.1.7"
			}
		]
	};
};

const makeRequest = async (url) => {
	try {
		const response = await fetch(url);
		const result = await response.json();

		return {
			success: true,
			result,
		};
	} catch (error) {
		console.error(error);

		return {
			success: false,
			result: error,
		};
	}
};

const getTagVersion = (plugin) => {
	return makeRequest(`https://raw.githubusercontent.com/${plugin.author}/${plugin.name}/${plugin.version}/package.json`);
};

const getMasterVersion = (plugin) => {
	return makeRequest(`https://raw.githubusercontent.com/${plugin.author}/${plugin.name}/master/package.json`);
};

const getTags = (plugin) => {
	return makeRequest(`https://api.github.com/repos/${plugin.author}/${plugin.name}/tags`);
};

const eachPlugin = async (callback) => {
	const plugins = (await fetchPlugins())?.plugins;

	await plugins.reduce(async (next, plugin) => {
		await next;
		const item = {
			name: plugin.name,
			link: plugin.repository,
			registry: plugin.version,
		};

		try {
			const packageByTag = await getTagVersion(plugin);
			const packageByMaster = await getMasterVersion(plugin);

			if (packageByMaster.success) {
				item.master = packageByMaster.result.version;
			} else {
				item.masterError = packageByMaster.result.message;
			}

			if (packageByTag.success) {
				item.tag = packageByTag.result.version;
			} else {
				const tags = await getTags(plugin);

				if (tags.success) {
					item.tag = tags.result[0].name;
				} else {
					item.tagError = tags.result.message;
				}
			}

			if (item.registry !== item.master) {
				item.generalError = 'package.json version in master branch does not correspond to registry';			
			}

			if (item.registry !== item.tag) {
				item.generalError = 'Tag does not correspond to registry';			
			}
		} catch (error) {
			item.generalError = error.message;			
		}

		console.log(item.name);
		callback(item);
	}, Promise.resolve());
};

const renderTable = (data) => {
	const table = document.getElementById('plugins-table').querySelector('tbody');
	table.innerHTML = '';
	data.forEach((item) => {
		table.appendChild(createRow(item));
	});
};

window.addEventListener('DOMContentLoaded', async () => {
	const spinner = document.querySelector('.spinner-container');
	try {
		const result = [];

		await eachPlugin((item) => {
			result.push(item);
		});
	
		renderTable(result);
	} catch (error) {
		alert(error.message);
	} finally {
		spinner.style.display = 'none';
	}
});