::
:: Microsoft Azure SDK for Node - Generate library code
:: Copyright (C) Microsoft Corporation. All Rights Reserved.
::

@echo off
set autoRestVersion=0.14.0-Nightly20160125
if  "%1" == "" (
    set specFile="https://raw.githubusercontent.com/begoldsm/azure-rest-api-specs/master/arm-datalake-analytics/job/2015-11-01-preview/swagger/job.json"
) else (
    set specFile="%1"
)
set repoRoot=%~dp0..\..\..\
set generateFolder=%~dp0lib\job

if exist %generateFolder% rd /S /Q  %generateFolder%
call "%repoRoot%\tools\autorest.gen.cmd" %specFile% Microsoft.Azure.Management.DataLake.Analytics %autoRestVersion% %generateFolder% 