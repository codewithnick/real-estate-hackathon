import traceback
import json
def get_creds(attr):
    try:
        f = open ('config.json', "r")
        data = json.loads(f.read())
        return data[attr]
    except:
        print("unhandled exception")
        #traceback.print_exc()
  
