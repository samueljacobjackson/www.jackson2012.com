#!/usr/bin/env bash

# Safely fix invalid content-type metadata on AWS S3 bucket website assets for some common filetypes
# Inclues CSS, JS, JSON, JPG, JPEG, GIF, PNG, SVG, PDF, XML

BUCKET="www.jackson2012.com"


# Functions
function output(){
	echo $1
	echo $1 >> s3.log
}

function check_command {
	type -P $1 &>/dev/null || fail "Unable to find $1, please install it and run this script again."
}

function completed(){
	output
	horizontalRule
	tput setaf 2; output "Completed!" && tput sgr0
	horizontalRule
	output
}

function fail(){
	tput setaf 1; output "Failure: $*" && tput sgr0
	exit 1
}

function horizontalRule(){
	output "====================================================="
}

function message(){
	output
	horizontalRule
	output "$*"
	horizontalRule
	output
}

function pause(){
	read -n 1 -s -p "Press any key to continue..."
	echo
}

echo "Start" > s3.log

# Verify AWS CLI Credentials are setup
# http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html
if ! grep -q aws_access_key_id ~/.aws/credentials; then
	if ! grep -q aws_access_key_id ~/.aws/config; then
		fail "AWS config not found or CLI not installed. Please run \"aws configure\"."
	fi
fi

check_command "aws"

# Check for AWS CLI profile argument passed into the script
# http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cli-multiple-profiles
if [ $# -eq 0 ]; then
	scriptname=`basename "$0"`
	output "Usage: ./$scriptname profile"
	output "Where profile is the AWS CLI profile name"
	output "Using default profile"
	profile=default
else
	profile=$1
fi

message "This script will safely fix invalid content-type metadata on AWS S3 bucket website assets."
echo
# pause

# Ensure Variables are set
if [ "$BUCKET" = "YOUR-S3-BUCKET-NAME" ]; then
	read -r -p "Enter the S3 bucket name: " BUCKET
	if [ -z "$BUCKET" ]; then
		fail "Failed to set variables!"
	fi
fi

# Determine the bucket region
REGION=$(aws s3api get-bucket-location --bucket $BUCKET --output text --profile $profile 2>&1)
if [ ! $? -eq 0 ]; then
	fail "$REGION"
fi
if echo $REGION | grep -q "None"; then
	REGION="us-east-1"
fi

message CSS
css=$(aws s3 cp --recursive --profile $profile --region $REGION s3://$BUCKET/ s3://$BUCKET/ --exclude "*" --include "*.css" --content-type "text/css" --metadata-directive "REPLACE" 2>&1)
if [ ! $? -eq 0 ]; then
	fail "$css"
fi
if echo $css | grep -E -iq "error|not"; then
	fail "$css"
else
	output "$css"
fi

message JS
js=$(aws s3 cp --recursive --profile $profile --region $REGION s3://$BUCKET/ s3://$BUCKET/ --exclude "*" --include "*.js" --content-type "application/javascript" --metadata-directive "REPLACE" 2>&1)
if [ ! $? -eq 0 ]; then
	fail "$js"
fi
if output $js | grep -E -iq "error|not"; then
	fail "$js"
else
	output "$js"
fi

message JSON
json=$(aws s3 cp --recursive --profile $profile --region $REGION s3://$BUCKET/ s3://$BUCKET/ --exclude "*" --include "*.json" --content-type "application/json" --metadata-directive "REPLACE" 2>&1)
if [ ! $? -eq 0 ]; then
	fail "$json"
fi
if output $json | grep -E -iq "error|not"; then
	fail "$json"
else
	output "$json"
fi

message JPG
jpg=$(aws s3 cp --recursive --profile $profile --region $REGION s3://$BUCKET/ s3://$BUCKET/ --exclude "*" --include "*.jpg" --content-type "image/jpeg" --metadata-directive "REPLACE" 2>&1)
if [ ! $? -eq 0 ]; then
	fail "$jpg"
fi
if output $jpg | grep -E -iq "error|not"; then
	fail "$jpg"
else
	output "$jpg"
fi
message JPEG
jpeg=$(aws s3 cp --recursive --profile $profile --region $REGION s3://$BUCKET/ s3://$BUCKET/ --exclude "*" --include "*.jpeg" --content-type "image/jpeg" --metadata-directive "REPLACE" 2>&1)
if [ ! $? -eq 0 ]; then
	fail "$jpeg"
fi
if output $jpeg | grep -E -iq "error|not"; then
	fail "$jpeg"
else
	output "$jpeg"
fi

message GIF
gif=$(aws s3 cp --recursive --profile $profile --region $REGION s3://$BUCKET/ s3://$BUCKET/ --exclude "*" --include "*.gif" --content-type "image/gif" --metadata-directive "REPLACE" 2>&1)
if [ ! $? -eq 0 ]; then
	fail "$gif"
fi
if output $gif | grep -E -iq "error|not"; then
	fail "$gif"
else
	output "$gif"
fi

message PNG
png=$(aws s3 cp --recursive --profile $profile --region $REGION s3://$BUCKET/ s3://$BUCKET/ --exclude "*" --include "*.png" --content-type "image/png" --metadata-directive "REPLACE" 2>&1)
if [ ! $? -eq 0 ]; then
	fail "$png"
fi
if output $png | grep -E -iq "error|not"; then
	fail "$png"
else
	output "$png"
fi

message SVG
svg=$(aws s3 cp --recursive --profile $profile --region $REGION s3://$BUCKET/ s3://$BUCKET/ --exclude "*" --include "*.svg" --content-type "image/svg+xml" --metadata-directive "REPLACE" 2>&1)
if [ ! $? -eq 0 ]; then
	fail "$svg"
fi
if output $svg | grep -E -iq "error|not"; then
	fail "$svg"
else
	output "$svg"
fi

message PDF
pdf=$(aws s3 cp --recursive --profile $profile --region $REGION s3://$BUCKET/ s3://$BUCKET/ --exclude "*" --include "*.pdf" --content-type "application/pdf" --metadata-directive "REPLACE" 2>&1)
if [ ! $? -eq 0 ]; then
	fail "$pdf"
fi
if output $pdf | grep -E -iq "error|not"; then
	fail "$pdf"
else
	output "$pdf"
fi

message XML
xml=$(aws s3 cp --recursive --profile $profile --region $REGION s3://$BUCKET/ s3://$BUCKET/ --exclude "*" --include "*.xml" --content-type "text/xml" --metadata-directive "REPLACE" 2>&1)
if [ ! $? -eq 0 ]; then
	fail "$xml"
fi
if output $xml | grep -E -iq "error|not"; then
	fail "$xml"
else
	output "$xml"
fi


completed
