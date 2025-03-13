const employees = [
  {
      "id": 1,
      "firstName": "Apporv",
      "email": "e@e.com",
      "password": "123",
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Update website",
              "taskDescription": "Revamp the homepage design",
              "taskDate": "2024-10-12",
              "category": "Design" 
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Client meeting",
              "taskDescription": "Discuss project requirements",
              "taskDate": "2024-10-10",
              "category": "Meeting"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Fix bugs",
              "taskDescription": "Resolve bugs reported in issue tracker",
              "taskDate": "2024-10-14",
              "category": "Development"
          }
      ]
  },
  {
      "id": 2,
      "firstName": "Vipul",
      "email": "employee2@example.com",
      "password": "123",
      "taskCounts": {
          "active": 1,
          "newTask": 0,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Database optimization",
              "taskDescription": "Optimize queries for better performance",
              "taskDate": "2024-10-11",
              "category": "Database"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Design new feature",
              "taskDescription": "Create mockups for the new feature",
              "taskDate": "2024-10-09",
              "category": "Design"
          }
      ]
  },
  {
      "id": 3,
      "firstName": "Kartikesh",
      "email": "employee3@example.com",
      "password": "123",
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Prepare presentation",
              "taskDescription": "Prepare slides for upcoming client presentation",
              "taskDate": "2024-10-13",
              "category": "Presentation"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Code review",
              "taskDescription": "Review the codebase for optimization",
              "taskDate": "2024-10-12",
              "category": "Development"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Testing",
              "taskDescription": "Test the latest build for bugs",
              "taskDate": "2024-10-08",
              "category": "QA"
          }
      ]
  },
  {
      "id": 4,
      "firstName": "Saurav",
      "email": "employee4@example.com",
      "password": "123",
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 0,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Write documentation",
              "taskDescription": "Update the project documentation",
              "taskDate": "2024-10-13",
              "category": "Documentation"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Set up CI/CD",
              "taskDescription": "Implement continuous integration pipeline",
              "taskDate": "2024-10-11",
              "category": "DevOps"
          }
      ]
  },
  {
      "id": 5,
      "firstName": "Parthib",
      "email": "employee5@example.com",
      "password": "123",
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "UI redesign",
              "taskDescription": "Redesign the user interface for better UX",
              "taskDate": "2024-10-14",
              "category": "Design"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Deploy new build",
              "taskDescription": "Deploy the latest build to production",
              "taskDate": "2024-10-09",
              "category": "DevOps"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Client feedback",
              "taskDescription": "Gather feedback from clients after product launch",
              "taskDate": "2024-10-12",
              "category": "Support"
          }
      ]
  }
];


const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}];

export const setLocalStorage = (data) => {
    if (!data) return;
    localStorage.setItem("employees", JSON.stringify(data.employees || []));
    localStorage.setItem("admin", JSON.stringify(data.admin || {}));
  };
  
  //  Retrieve from Local Storage
  export const getLocalStorage = () => {
    let employees = JSON.parse(localStorage.getItem("employees"));
    let admin = JSON.parse(localStorage.getItem("admin"));
  
    // If local storage is empty, initialize with default data
    if (!employees || employees.length === 0) {
      employees = [...employees]; // Clone to avoid direct mutations
      localStorage.setItem("employees", JSON.stringify(employees));
    }
  
    if (!admin || Object.keys(admin).length === 0) {
      admin = { ...admin }; // Clone admin
      localStorage.setItem("admin", JSON.stringify(admin));
    }
  
    return { employees, admin };
  };
  
  //  Initialize Local Storage if Empty
  export const initializeLocalStorage = () => {
    if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
      setLocalStorage({ employees, admin });
    }
  };
  
  //  Call this function once at the start of your app
  initializeLocalStorage();