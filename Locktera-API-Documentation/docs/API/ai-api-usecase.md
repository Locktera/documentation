import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# AI API Usecase

![image](https://github.com/user-attachments/assets/bb288911-d353-4376-b7d3-27becc0fe131)


This API example demo the ability to:
    - encode and secure documents into secure content with option of:
        - static DRM
        - dynamic DRM
    - change the DRM for the dynamic option 
    - decode the content to extract all or partial documents  

#### Example of .env file
```sh
API_URL=https://dev.locktera.com/api/v1
DECODE_DIR=decode
ORG_ID=org_id_uuid
API_KEY=api_key_value
```

#### Example of manifest_ai_static_file_permission1.json file
```sh
{
	"container": {
		"recipients":["email1@gmail.com","email2@gmail.com"],
		"drm": {
			"mac": {
				"allow": ["f4:d4:88:66:db:56"]
			},
            "geo": {
                "allow":[{"country":"USA"},{"country":"CANADA"}]
            }
		}
	},
	"files": {
		"hello.txt": {},
		"hello.html": {}
	}
}
```

#### Example encoding content with static permissions:
```python
import dotenv
import requests
import os

# Read the environment variables
dotenv.load_dotenv()
API_URL = os.getenv('API_URL', 'https://share.locktera.com/api/v1')
ORG_ID = os.getenv('ORG_ID')
API_KEY = os.getenv('API_KEY')
DECODE_DIR = os.getenv('DECODE_DIR', 'decode')

def encode_manifest(manifest_path):
	# Read the manifest
	with open(manifest_path) as file:
		manifest = json.load(file)

	manifest_dir = os.path.dirname(manifest_path)

	encode_url = f'{API_URL}/orgs/{ORG_ID}/containers/encode'

	files = []

	# Add the manifest to the request
	files.append(('manifest', ('manifest', json.dumps(manifest), 'application/json')))

	# Add each file to the request
	for file_name in manifest['files']:
		type_, _ = mimetypes.guess_type(file_name)
		files.append(('files', (file_name, open(f'{manifest_dir}/{file_name}', 'rb'), type_)))

	# Send the request and print the response
	print('Encoding...')
	rsp = requests.post(encode_url, headers=headers, files=files)
	encoded_manifest = rsp.json()
	encode_org_id = encoded_manifest['org_id']
	encode_container_id = encoded_manifest['container']['uuid']
	#print(encoded_manifest['org_id'], encoded_manifest['container']['uuid'])
	print(encode_org_id, encode_container_id)
	v_return = f'encode: org_id={encode_org_id}, container_id={encode_container_id}: encoded successfully'
	# write information file containing encoded uuid for later decoding
	with open(f"./decode/file_{encode_container_id}.inf", "w") as file:
		file.write(encode_container_id)
	return 'success',v_return

v_ret_code,v_ret = encode_manifest(manifest_path="manifest_ai_static_file_permission1.json")
```


#### Example of manifest_ai_dynamic_file_permission1.json file
```sh
{
	"container": {
		"recipients":["email1@gmail.com","email2@gmail.com"],
		"drm": {
			"mac": {
				"allow": ["f4:d4:88:66:db:56"]
			},
            "geo": {
                "allow":[{"country":"USA"},{"country":"CANADA"}]
            },
			"dynamic":true
		}
	},
	"files": {
		"hello.txt": {},
		"hello.html": {}
	}
}
```

#### Example encoding content with dynamic DRM permissions option:
```python
import dotenv
import requests
import os

# Read the environment variables
dotenv.load_dotenv()
API_URL = os.getenv('API_URL', 'https://share.locktera.com/api/v1')
ORG_ID = os.getenv('ORG_ID')
API_KEY = os.getenv('API_KEY')
DECODE_DIR = os.getenv('DECODE_DIR', 'decode')

def encode_manifest(manifest_path):
	# Read the manifest
	with open(manifest_path) as file:
		manifest = json.load(file)

	manifest_dir = os.path.dirname(manifest_path)

	encode_url = f'{API_URL}/orgs/{ORG_ID}/containers/encode'

	files = []

	# Add the manifest to the request
	files.append(('manifest', ('manifest', json.dumps(manifest), 'application/json')))

	# Add each file to the request
	for file_name in manifest['files']:
		type_, _ = mimetypes.guess_type(file_name)
		files.append(('files', (file_name, open(f'{manifest_dir}/{file_name}', 'rb'), type_)))

	# Send the request and print the response
	print('Encoding...')
	rsp = requests.post(encode_url, headers=headers, files=files)
	encoded_manifest = rsp.json()
	encode_org_id = encoded_manifest['org_id']
	encode_container_id = encoded_manifest['container']['uuid']
	#print(encoded_manifest['org_id'], encoded_manifest['container']['uuid'])
	print(encode_org_id, encode_container_id)
	v_return = f'encode: org_id={encode_org_id}, container_id={encode_container_id}: encoded successfully'
	# write information file containing encoded uuid for later decoding
	with open(f"./decode/file_{encode_container_id}.inf", "w") as file:
		file.write(encode_container_id)
	return 'success',v_return

v_ret_code,v_ret = encode_manifest(manifest_path="manifest_ai_dynamic_file_permission1.json")
```

#### Example changing DRM on content that was built with dynamic DRM option:
```python
import dotenv
import requests
import os

# Read the environment variables
dotenv.load_dotenv()
API_URL = os.getenv('API_URL', 'https://share.locktera.com/api/v1')
ORG_ID = os.getenv('ORG_ID')
API_KEY = os.getenv('API_KEY')
DECODE_DIR = os.getenv('DECODE_DIR', 'decode')

payload = """
    {
        "id": "0194b966-b187-79b3-97c7-7c6a7a82e85e",
        "org_id": "0f095c34-ed8a-4f8c-8146-6be94ebd7cd4",
        "downloadable": true,
        "recipients": [
            "tkadado@locktera.com",
            "jknezek@locktera.com"
        ],
        "opens": 43,
        "time": {
            "start": "2024-01-01T00:00:00Z",
            "end": "2029-07-10T00:00:00Z"
        },
        "ip": {
            "allow": [
                "0.0.0.0/0"
            ]
        }
    }
    """
requests.put(f"{API_URL}/orgs/{ORG_ID}/containers/0194b966-b187-79b3-97c7-7c6a7a82e85e/drm",
                 headers={"authorization":f"Bearer {API_KEY}","content-type":"application/json"},
                 data=payload
                 )
```

#### Example decoding content:
```python
import dotenv
import requests
import os

# Read the environment variables
dotenv.load_dotenv()
API_URL = os.getenv('API_URL', 'https://share.locktera.com/api/v1')
ORG_ID = os.getenv('ORG_ID')
API_KEY = os.getenv('API_KEY')
DECODE_DIR = os.getenv('DECODE_DIR', 'decode')


container_id = "0194b966-b187-79b3-97c7-7c6a7a82e85e"
### GET /orgs/{org_id}/containers/{container_id}/decode/{file_name}?viewer=tkadado@gmail.com
file_name = 'hello.txt'
viewer = "email1@gmail.com"
repsonse = requests.get(f"{m.API_URL}/orgs/{m.ORG_ID}/containers/{container_id}/decode/{file_name}",
                headers={"authorization":f"Bearer {m.API_KEY}"}, 
                params={'viewer':viewer}
                )
print(repsonse.text)
```
