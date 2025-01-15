import React from "react";

function CreateInvestigation() {
  return (
    <div>
      <h1 className="text-4xl">Create Investigation</h1>

      <form action="" method="post">
        <fieldset>
          <legend>Mandatory Fields:</legend>
          <label htmlFor="File Number">File Number</label>
          <input type="text" name="File Number" id="File Number" />
        </fieldset>
      </form>
    </div>
  );
}

export default CreateInvestigation;
