node {
  /**
   * Check the code out to this box (Jenkins).
   */
  stage 'Fetch source code'
  checkout scm

  /**
   * Install app dependencies.
   */
  stage 'Install dependencies'
  sh 'npm install'

  /**
   * Code quality check.
   */
  stage 'Code quality check'
  sh 'npm run lint'

  /**
   * Run API tests.
   */
  stage 'API tests'
  sh './tests/api/run-tests.sh'

  /**
   * Run the tests!
   */
  stage 'App tests'
  try {
    sh 'npm test'
  }
  finally {
    //step([$class: 'JUnitResultArchiver', testResults: 'target/*.xml'])
    //step([$class: 'ArtifactArchiver', artifacts: 'coverage/**/*', fingerprint: true])
    //step([$class: 'Mailer', notifyEveryUnstableBuild: true, recipients: "allister.price@gmail.com", sendToIndividuals: true])
  }
}
