/*
 * Copyright 2019 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Attachments } from 'pages/inside/logsPage/logItemInfo/logItemInfoTabs/attachments';
import { LOG_VIEW } from 'controllers/testItem';
import { InfoPanel } from 'pages/inside/common/infoPanel';
import { LOG_PAGE_EVENTS } from 'components/main/analytics/events';
import { SCREEN_XS_MAX_MEDIA } from 'common/constants/screenSizeVariables';

export class TestItemLogsToolbar extends Component {
  static propTypes = {
    parentItem: PropTypes.object,
  };

  static defaultProps = {
    attachments: [],
    attachmentsLoading: false,
    attachmentsPagination: {},
    parentItem: {},
  };

  state = {
    isMobileView: false,
  };

  componentDidMount() {
    this.match = window.matchMedia(SCREEN_XS_MAX_MEDIA);
    this.match.addListener(this.setMobileView);
    this.setMobileView(this.match);
  }

  componentWillUnmount() {
    this.match.removeListener(this.setMobileView);
  }

  setMobileView = (media) =>
    media.matches !== this.state.isMobileView &&
    this.setState({
      isMobileView: media.matches,
    });

  render() {
    const { parentItem } = this.props;
    const { isMobileView } = this.state;

    return (
      <Fragment>
        <InfoPanel viewMode={LOG_VIEW} data={parentItem} events={LOG_PAGE_EVENTS} />
        <Attachments isMobileView={isMobileView} />
      </Fragment>
    );
  }
}
