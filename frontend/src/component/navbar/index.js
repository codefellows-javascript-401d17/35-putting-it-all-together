import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom'

import Icon from '../icon-component/index';
import Avatar from '../avatar/index';
import {tokenSet} from '../../action/auth-actions';
import * as util from '../../lib/util';
import * as authActions from '../../action/auth-actions';
import {profileFetchRequest} from ('../../action/profile-actions')
