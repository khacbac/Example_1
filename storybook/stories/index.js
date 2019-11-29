import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import TestApp, { WizardByStep } from '../../TestApp';

// eslint-disable-next-line import/extensions


storiesOf('Wizard 1', module)
  .add('LOCATION', () => (
    <TestApp wByStep={WizardByStep.getWizardBySteps()[0]}/>
  ))
  .add('DETAIL', () => (
    <TestApp wByStep={WizardByStep.getWizardBySteps()[1]}/>
  ))
  .add('SERVICE', () => (
    <TestApp wByStep={WizardByStep.getWizardBySteps()[2]}/>
  ))
  .add('ADDRESS', () => (
    <TestApp wByStep={WizardByStep.getWizardBySteps()[3]}/>
  ))
  .add('SUBMIT', () => (
    <TestApp wByStep={WizardByStep.getWizardBySteps()[4]}/>
  ))
