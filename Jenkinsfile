pipeline{
    agent any

    stages{
        stage("Build Docker Image"){
            steps{
                sh "docker build -t as3image ."
            }
        }
        stage("Deploy Node JS App"){
            steps{
                sh "docker run -p 3150:3150 --name as3container -d as3image"
            }
        }
    }
}