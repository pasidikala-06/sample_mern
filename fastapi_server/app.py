from fastapi import FastAPI
app=FastAPI()
#localhost:8000/getStudents
@app.get("/getStudents")
def getStudents():
    return "get student method called"
#localhost:8000/addStudents
@app.post("/addStudent")
def addStudent():
    return "add student method called"
#localhost:8000/updateStudents
@app.put("/updateStudent")
def updateStudent():
    return "update student method called"
#localhost:8000/deleteStudents
@app.delete("/deleteStudent")
def deleteStudent():
    return "delete student method called"
@app.get("/getPaticularStudent/{userid}")
def getParticularStudent(user:int):
    return{"userid":userid}
@app.get("/getdeptdetails")
def getdeptdetails(dept:str,mark:int):
    return{"dept":dept,"mark":mark}

                       
                       
        