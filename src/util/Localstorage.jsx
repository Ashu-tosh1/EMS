let Employees = {
    "users": [
      {
        "id": 2,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
          {
            "taskTitle": "UI Design",
            "taskDescription": "Create a dashboard UI",
            "date": "2024-12-15",
            "category": "Design",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Bug Fixing",
            "taskDescription": "Fix bugs in login page",
            "date": "2024-12-16",
            "category": "Development",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 3,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
          {
            "taskTitle": "API Integration",
            "taskDescription": "Integrate payment API",
            "date": "2024-12-17",
            "category": "Backend",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Code Review",
            "taskDescription": "Review code for the latest feature",
            "date": "2024-12-18",
            "category": "Development",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 4,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
          {
            "taskTitle": "Testing",
            "taskDescription": "Perform unit testing",
            "date": "2024-12-19",
            "category": "QA",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Documentation",
            "taskDescription": "Update project documentation",
            "date": "2024-12-20",
            "category": "Documentation",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 5,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
          {
            "taskTitle": "Deployment",
            "taskDescription": "Deploy application to staging",
            "date": "2024-12-21",
            "category": "Ops",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Database Optimization",
            "taskDescription": "Optimize database queries",
            "date": "2024-12-22",
            "category": "Database",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 6,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
          {
            "taskTitle": "Frontend Enhancement",
            "taskDescription": "Add animations to UI components",
            "date": "2024-12-23",
            "category": "Frontend",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Security Audit",
            "taskDescription": "Perform security testing",
            "date": "2024-12-24",
            "category": "Security",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      }
    ]
  };
  
  const admin={
    "admin": [
      {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
      }]
    }

export const setLocalStorage =()=>{
    localStorage.setItem('employees',JSON.stringify(Employees) )
    localStorage.setItem('admin',JSON.stringify(admin) )
}
export const getLocalStorage =()=>{
   const employees= JSON.parse(localStorage.getItem('employees'))
   const admin= JSON.parse(localStorage.getItem('admin'))
   return {employees,admin}
}
