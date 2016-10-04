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
   * Run the tests!
   */
  stage 'Run tests'
  try {
    sh 'npm test'
  }
  finally {
    // Stuff.
  }
}
