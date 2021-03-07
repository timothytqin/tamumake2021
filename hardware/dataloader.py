import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import time
import serial

# Use a service account
cred = credentials.Certificate('tamumake2021.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

ser = serial.Serial('COM8', 115200)

# doc_ref = db.collection(u'scratchpad').document(u'testinput')
# doc_ref.set({
#     u'first': u'joe',
#     u'last': u'doe',
#     u'born': 1815
# })



ts = str(int(time.time()))


def enterdata(ts, data):
    doc_ref = db.collection(u'readings').document()
    doc_ref.set({
        u'timestamp': ts,
        u'cpm': data
    })



print ("connected to: " + ser.portstr)




while True:

    line = ser.readline()
    line = line.decode()
    line = str(line)
    ts = str(int(time.time()))
    # line = line.decode()
    print("read a line")
    line = line.strip()
    if line.startswith('#'):
        line = line[2:]
        enterdata(ts, line)
    if line.endswith('$'):
        line = line[:-1]

    
    # time.sleep(1)
    # enterdata(ts)
    print (line)



