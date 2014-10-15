<html>
 
<body>
    <h1>Todo List</h1>
  
    
    <main> 
    <ul id="tasklist"></ul>
   
    
    </main>
    <aside>
    <label for ="newtask">Enter Task</label>
    <input type="text" id="newtask" size=40 value="enter task here">
    <select id="priority">
         <option>High</option>
         <option>Medium</option>
         <option>Low</option>
    </select>
    <button onclick="addTask()">Add</button>
    </aside>
    <script type="text/javascript">
       addTask = function(){
        i = document.querySelector("#newtask")
        bl = document.querySelector("#busylist")
        li = document.createElement("li");
        cb = document.createElement("input")
        cb.type = "checkbox"
        t = document.createTextNode(i.value) 
        li.appendChild(cb)
        li.appendChild(t)
        bl.appendChild(li)
        
        }
    </script>
</body>
    


</html>