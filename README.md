<h1 align="center">Grep Jobs API</h1>
<p>The Grep Jobs API is a RESTful API deployed to serve data to <a href="grepjobs.netlify.app">Grep Jobs</a><a href="https://github.com/natelee3/grep-jobs">(see frontend repo)</a>. </p>

<details>
    <summary align="center">Table of Contents</summary>
    <ol>
        <li>
            <a href="#jobs-endpoints">Jobs Endpoints</a>
            <ul>
                <li>GET /jobs</li>
                <li>GET /jobs/:user_id</li>
            </ul>
        </li>
  </ol>
</details><hr/>

    BASE URL - 

    GET /

<b>Returns text: "Welcome to the GrepJobs API!"</b>

## JOBS ENDPOINTS

    GET /jobs

<b>Returns an array of all items in the database</b>
<ul>
    <li>_id (MongoDB assigned ObjectId)</li>
    <li>job_id (int32)</li>
    <li>user_id (int32)</li>
    <li>company_name (string)</li>
    <li>role (string)</li>
    <li>logo (string)</li>
    <li>location (string)</li>
    <li>date_posted (date)</li>
</ul>

    GET /jobs/:user_id

params: user_id (integer)

<b>Returns an array of all items that match the input order_id in the orders_items table</b>
<ul>
    <li>_id (MongoDB assigned ObjectId)</li>
    <li>job_id (int32)</li>
    <li>user_id (int32)</li>
    <li>company_name (string)</li>
    <li>role (string)</li>
    <li>logo (string)</li>
    <li>location (string)</li>
    <li>date_posted (date)</li>
</ul>

<p align="center">
    <a href="#interiorize-api">Back to Top</a>
</p>
