import { CommandBarButton, IIconProps, IStackStyles } from '@fluentui/react';
import * as React from 'react';
import { ContainerButtonStyles } from '../styles/comandBarStyles';
import { ICommandBarProps } from '../utilities/types';

export const stackStyles: Partial<IStackStyles> = { root: { height: 44, marginLeft: 100 } };
const deleteIcon: IIconProps = { iconName: 'Delete' };
const addIcon: IIconProps = { iconName: 'Add' };

export const CommandBar = ({
  _service: dataverseService,
  className,
  entityName,
  selectedRecordIds,
  displayName,
  newButtonVisibility,
  deleteButtonVisibility,
  setDialogAccepted } : ICommandBarProps) =>
  <div className='containerButtons'>
    <CommandBarButton
      maxLength={1}
      disabled={!newButtonVisibility}
      iconProps={addIcon}
      styles={ContainerButtonStyles}
      text={`New ${displayName}`}
      onClick={dataverseService.openRecord.bind(null, entityName, '')}
    />

    <CommandBarButton
      className={className}
      disabled={!deleteButtonVisibility}
      iconProps={deleteIcon}
      styles={ContainerButtonStyles}
      text="Delete"
      onClick={dataverseService.openRecordDeleteDialog.bind(
        null,
        selectedRecordIds,
        entityName,
        setDialogAccepted)}
    />
  </div>;