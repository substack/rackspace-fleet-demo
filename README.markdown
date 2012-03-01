example
=======

To get this running with [fleet](https://github.com/substack/fleet) first do:

```
$ npm install -g fleet
$ npm install .
$ git add node_modules
$ git commit -m'check in node modules'
```

Then fire up a fleet hub:

```
$ mkdir -p /tmp/fleet/hub; cd /tmp/fleet/hub
$ fleet hub --port=7000 --secret=beepboop
```

and one or more fleet drones:

```
$ mkdir -p /tmp/fleet/drone0; cd /tmp/fleet/drone0
$ fleet drone --hub=localhost:7000 --secret=beepboop
```

now from the git directory set up a remote:

```
$ fleet remote add default --hub=localhost:7000 --secret=beepboop
```

then deploy your code:

```
$ fleet deploy
```

and spawn the processes!

```
$ fleet spawn -- node web.js 8085
$ fleet spawn -- node auth.js 8090
```

Super great!

List the processes with:

```
$ fleet ps
```
