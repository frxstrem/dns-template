#!/usr/bin/env bash

sh -c "dnscontrol $*" | tee output.txt

output="$(cat output.txt)"
output="${output//'%'/'%25'}"
output="${output//$'\n'/'%0A'}"
output="${output//$'\r'/'%0D'}"
echo "::set-output name=stdout::$output"
