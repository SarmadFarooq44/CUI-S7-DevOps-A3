pipeline{
    agent any

    stages{
        stage("Build Docker Image"){
            steps{
                sh "docker build -t as31image ."
            }
        }
        stage("Deploy Node JS App"){
            steps{
                sh "docker run -p 3150:3150 --name as31container -d as31image"
            }
        }
        stage("Testing Node Js App"){
            steps{
                sh "pwd"
                sh "cd test"
                sh "pwd"
            }
        }
    }
}
