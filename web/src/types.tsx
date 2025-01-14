//
// Copyright © 2020 Province of British Columbia
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

import React, { MouseEventHandler } from 'react';

export type ColorSet = 'contrast' | 'primary' | 'black';

export interface MenuItem {
  title: string;
  subTitle: string;
  href?: string;
  onClickCB?: MouseEventHandler<React.ReactNode>;
  handleOnClick?: MouseEventHandler<React.ReactNode>;
}

export type QuotaSize = 'small' | 'medium' | 'large';

export interface NamespaceCN {
  clusterId: string;
  name: string;
  provisioned: boolean;
}

export interface Namespace {
  namespaceId: string;
  name: string;
  clusters: NamespaceCN[];
}

export interface ProjectNamespaceResourceQuotaSize {
  quotaCpuSize: '';
  quotaMemorySize: '';
  quotaStorageSize: '';
  quotaSnapshotSize: '';
}

export interface NamespaceQuotaOption {
  quotaCpuSize: QuotaSize[];
  quotaMemorySize: QuotaSize[];
  quotaStorageSize: QuotaSize[];
  quotaSnapshotSize: QuotaSize[];
}
export interface ProjectSetResourceQuotaSize {
  dev: ProjectNamespaceResourceQuotaSize;
  test: ProjectNamespaceResourceQuotaSize;
  tools: ProjectNamespaceResourceQuotaSize;
  prod: ProjectNamespaceResourceQuotaSize;
}
