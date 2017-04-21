# node-coldfusion-tester

## Fast automated tests for ColdFusion projects using TestBox
Video demonstration here...

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/T-g--_I1h_0/0.jpg)](http://www.youtube.com/watch?v=T-g--_I1h_0)

## Prerequisites: TestBox
You will need [TestBox](https://github.com/Ortus-Solutions/TestBox) installed in the webroot of your coldfusion server.

## Install the package globaly
```bash
npm install -g node-coldfusion-tester
```

## Setting up a ColdFusion project to use this tool
Navigate to your project folder in your terminal of choice and type:

```bash
cftester --install
```

You will be asked some questions:

```bash
prompt: The host running your ColdFusion:  (http://localhost:8500)
prompt: Path from the host to the root of your ColdFusion project:  some/path
prompt: Name of the folder in your project that contains the tests:  (test)
prompt: List of folders inside your test folder containing different kinds of tests (e.g. integration and unit):  (spec,unit)
prompt: Path from the host to the test runner:  (testbox/system/runners/HTMLRunner.cfm)
prompt: Suffix to be used for test files:  (Spec)
```

This in turn will create a `cf-tester-config.json` file in the current folder containing:

```json
{
  "host": "http://localhost:8500",
  "basePath": "some/path",
  "testFolder": "test",
  "testTypes": [
    "spec",
    "unit"
  ],
  "testRunner": "testbox/system/runners/HTMLRunner.cfm",
  "testFileSuffix": "Spec"
}
```

## Start watching you files
In the terminal you can now type:

```
cftester
```

And the system will start watching your files for changes and run relevant tests as you save your edits.
