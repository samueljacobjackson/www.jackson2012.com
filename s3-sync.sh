#!/usr/bin/env bash

s3cmd sync ./www/ s3://www.jackson2012.com/ --delete-removed
