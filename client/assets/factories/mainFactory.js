app.factory('mainFactory', ['$http', function($http){
	var factory = {};
	console.log('made it to the factory');
	factory.user = {};
	factory.users = [];
	factory.project = {};
	factory.projects = [];
	factory.editTask = {};
	console.log('kept it going')
	factory.registerUser = function(formData, callback){
		console.log('made it to factory.register')
		$http.post('/register', formData).then(function(returned_data){
			if(typeof(callback) == 'function'){
				factory.user = returned_data.data.user
				callback(returned_data.data)
			}
		})
	};

	factory.loginUser = function(formData, callback){
		console.log('made it to factory.login');
		$http.post('/login', formData).then(function(returned_data){
			if(typeof(callback) == 'function'){
				factory.user = returned_data.data.user
				callback(returned_data.data);
			}
		})
	};

	factory.logout = function(callback){
		console.log('ran logout in factory')
		$http.get('/logout').then(function(returned_data){
			console.log('made it to callback in factory')
			factory.user = {};
			factory.users = [];
			factory.project = {};
			factory.projects = [];
			if(typeof(callback) == "function"){
				callback();
			}
		})
	}

	factory.getLoggedInUserAndData = function(callback){
		$http.get('/user').then(function(returned_data){
			console.log('this is the user from persistence', returned_data.data.user)
			factory.user = returned_data.data.user
			callback(returned_data.data)
		});
		// will need to add another call for getting the vendors and products ///
		// and move the call to callback function to end of this func ///
	};

	factory.getCurrentProject = function(callback){
		$http.get('/currentProject').then(function(returned_data){
			console.log('this is the project from persistence', returned_data.data)
			factory.project = returned_data.data.project
			if(typeof(callback) == 'function'){
				callback(returned_data.data)
			}
		})
	}

	factory.newProject = function(projectInfo, callback){
		$http.post('/projects', projectInfo).then(function(returned_data){
			console.log('this is projects returned_data', returned_data.data);
			factory.project = returned_data.data.project
			factory.projects.push(returned_data.data.project)
			if(typeof(callback) == "function"){
				callback(returned_data.data)
			}
		})
	}

	factory.goToProject = function(projectID, callback){
		$http.get('/projects/'+projectID).then(function(returned_data){
			factory.project = returned_data.data.project
			if(typeof(callback) == "function"){
				callback(returned_data.data)
			}
		})
	}

	factory.createTask = function(taskInfo, projectID){
		console.log('ran create task function in factory')
		$http.post('/projects/'+projectID+'/task', taskInfo).then(function(returned_data){
			factory.project = returned_data.data.project
			if(typeof(callback) == "function"){
				callback(returned_data.data)
			}
		})
	}
	factory.editTask = function(projectID, taskInfo, callback){
		console.log('made it to edit task in factory')
		$http.post('/projects/'+projectID+'/task/'+taskInfo._id, taskInfo).then(function(returned_data){
			factory.editTask = returned_data.data.task;
			if(typeof(callback) == "function"){
				callback(returned_data.data)
			}
		})
	};
	return factory
}])

