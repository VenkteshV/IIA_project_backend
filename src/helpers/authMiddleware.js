import _ from 'lodash';
import config from '../../config/config';

export default function authMiddleware(req, res, next) {
  const authToken = req.headers.authorization;
  if (!_.isEmpty(authToken) && _.isEqual(config.researcheye.auth, authToken)) {
    return next();
  }
  else{
    res.set('WWW-Authenticate', 'Basic realm=Authentication Required');
    return res.sendStatus(401);
  }
}
