'use strict'

/**
 * @class ProtonBindable is an abstract class for bind components to proton
 * @author Luis Hernandez
 */
class ProtonBindable {

  constructor(proton) {
    this.proton = proton
  }

  /**
   * @method bindToApp
   * @description this method must be used for bind objects to this.proton.app
   * object
   * @author Luis Hernandez
   * @return {Boolean}
   */
  _bindToApp() {
    return Promise.resolve()
  }

  /**
   * @method bindToApp
   * @description this method must be used for bind middlewares to the proton
   * app
   * @author Luis Hernandez
   * @return {Boolean}
   */
  _bindToProton() {
    return Promise.resolve()
  }

}

module.exports = ProtonBindable
