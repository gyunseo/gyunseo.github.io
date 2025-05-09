// Copyright 2023 rbstj
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const cloudinary = require('cloudinary');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

cloudinary.v2.config({
  cloud_name: 'gyunseo-blog',
  api_key: '873459198774858',
  api_secret: dotenv.config().parsed.CLOUDINARY_API_SECRET,
  secure: true,
});

// upload all images in src/assets/image/ directory



const dir = path.join(__dirname, 'src/assets/image');

fs.readdir(dir, (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
        cloudinary.v2.uploader.upload(
        path.join(dir, file),
        {
            public_id: file.split('.')[0],
            overwrite: false,
            tags: ['blog'],
        },
        (error, result) => {
            if (error) throw error;
            console.log(result);
        },
        );
    });
    });

// upload all images in src/assets/image/ directory

