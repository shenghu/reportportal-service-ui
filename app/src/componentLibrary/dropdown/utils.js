/*
 * Copyright 2022 EPAM Systems
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

export const calculateDefaultIndex = (options, selectedValue) =>
  options
    .map(({ value }) => value)
    .indexOf(selectedValue instanceof Object ? selectedValue.value : selectedValue);

export const calculateCurrentItemIndex = (index, itemsCount) =>
  ((index % itemsCount) + itemsCount) % itemsCount;

const findNearestAvailableIndex = (index, options, step = 1) => {
  if (!options[index].disabled) {
    return index;
  }
  const itemsCount = options.length;

  return findNearestAvailableIndex(calculateCurrentItemIndex(index + step, itemsCount), options);
};

export const calculateNextIndex = (index, options) => findNearestAvailableIndex(index, options);

export const calculatePrevIndex = (index, options) => findNearestAvailableIndex(index, options, -1);
