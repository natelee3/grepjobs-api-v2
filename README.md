<h1 align="center">Grep Jobs API</h1>
<!-- <p>The Grep Jobs API is a RESTful API deployed to serve data to <a href="grepjobs.netlify.app">Grep Jobs</a><a href="https://github.com/natelee3/grep-jobs">(see frontend repo)</a>. Several public routes are denoted with * below, but the majority of the routes require a JSON Web Token only available to logged-in users.</p>
<p><a href="https://api.interiorize.design/images/db_schema.png">View our database schema</a></p> -->
<details>
  <summary align="center">Table of Contents</summary>
  <ol>
    <li>
      <a href="#jobs-endpoints">Jobs Endpoints</a>
      <ul>
        <li>GET /jobs*</li>
        <li>GET /jobs/:user</li>
        <!-- <li>GET /items/single/:item_id*</li>
        <li>GET /items/items-match</li>
        <li>GET /items/shop-search</li>
        <li>POST /items/generate-order</li> -->
      </ul>
    </li>
    <!-- <li>
      <a href="#users-endpoints">Users Endpoints</a>
      <ul>
        <li>GET /users</li>
        <li>GET /users/:user_id</li>
        <li>POST /users/add</li>
        <li>POST /users/delete</li>
      </ul>
    </li>  -->
  </ol>
</details><hr/>

    BASE URL - 

    GET /

<b>Returns text: "Welcome to the GrepJobs API Navigate to routes /jobs/ or /jobs/{job_id} to view saved information"</b>

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
