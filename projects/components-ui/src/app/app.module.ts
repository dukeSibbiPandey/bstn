import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsLibModule } from 'components-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuDetailsComponent } from './components/menu-details/menu-details.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import {PasswordModule} from 'primeng/password';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './components/error/error.component';
import { ColorPalettePrimaryComponent } from './components/controls/color-palette/color-palette-primary/color-palette-primary.component';
import { ColorPaletteSecondaryComponent } from './components/controls/color-palette/color-palette-secondary/color-palette-secondary.component';
import { ColorPaletteInfoComponent } from './components/controls/color-palette/color-palette-info/color-palette-info.component';
import { ColorPaletteSuccessComponent } from './components/controls/color-palette/color-palette-success/color-palette-success.component';
import { ColorPaletteWarningComponent } from './components/controls/color-palette/color-palette-warning/color-palette-warning.component';
import { ColorPaletteDangerComponent } from './components/controls/color-palette/color-palette-danger/color-palette-danger.component';
import { ColorPaletteBlackComponent } from './components/controls/color-palette/color-palette-black/color-palette-black.component';
import { ColorPaletteGrayDarkComponent } from './components/controls/color-palette/color-palette-gray-dark/color-palette-gray-dark.component';
import { ColorPaletteGrayComponent } from './components/controls/color-palette/color-palette-gray/color-palette-gray.component';
import { ColorPaletteLightComponent } from './components/controls/color-palette/color-palette-light/color-palette-light.component';
import { ColorPaletteIndigoComponent } from './components/controls/color-palette/color-palette-indigo/color-palette-indigo.component';
import { ColorPaletteLightblueComponent } from './components/controls/color-palette/color-palette-lightblue/color-palette-lightblue.component';
import { ColorPaletteNavyComponent } from './components/controls/color-palette/color-palette-navy/color-palette-navy.component';
import { ColorPalettePurpleComponent } from './components/controls/color-palette/color-palette-purple/color-palette-purple.component';
import { ColorPaletteFuchsiaComponent } from './components/controls/color-palette/color-palette-fuchsia/color-palette-fuchsia.component';
import { ColorPalettePinkComponent } from './components/controls/color-palette/color-palette-pink/color-palette-pink.component';
import { ColorPaletteMaroonComponent } from './components/controls/color-palette/color-palette-maroon/color-palette-maroon.component';
import { ColorPaletteOrangeComponent } from './components/controls/color-palette/color-palette-orange/color-palette-orange.component';
import { ColorPaletteLimeComponent } from './components/controls/color-palette/color-palette-lime/color-palette-lime.component';
import { ColorPaletteTealComponent } from './components/controls/color-palette/color-palette-teal/color-palette-teal.component';
import { ColorPaletteOliveComponent } from './components/controls/color-palette/color-palette-olive/color-palette-olive.component';
import { GeneralComponent } from './components/controls/general/general.component';
import { IconsComponent } from './components/controls/icons/icons.component';
import { ButtonsComponent } from './components/controls/buttons/buttons.component';
import { SlidersComponent } from './components/controls/sliders/sliders.component';
import { ModalsAndAlertsComponent } from './components/controls/modals-and-alerts/modals-and-alerts.component';
import { NavbarAndTabsComponent } from './components/controls/navbar-and-tabs/navbar-and-tabs.component';
import { TimelineComponent } from './components/controls/timeline/timeline.component';
import { RibbonsComponent } from './components/controls/ribbons/ribbons.component';
import { FaIconsComponent } from './components/controls/fa-icons/fa-icons.component';
import { FasFaBellComponent } from './components/controls/fa-icons/fas-fa-bell/fas-fa-bell.component';
import { FarFaBellComponent } from './components/controls/fa-icons/far-fa-bell/far-fa-bell.component';
import { FasFaBellSlashComponent } from './components/controls/fa-icons/fas-fa-bell-slash/fas-fa-bell-slash.component';
import { FarFaBellSlashComponent } from './components/controls/fa-icons/far-fa-bell-slash/far-fa-bell-slash.component';
import { FasFaExclamationComponent } from './components/controls/fa-icons/fas-fa-exclamation/fas-fa-exclamation.component';
import { FasFaExclamationCircleComponent } from './components/controls/fa-icons/fas-fa-exclamation-circle/fas-fa-exclamation-circle.component';
import { FasFaExclamationTriangleComponent } from './components/controls/fa-icons/fas-fa-exclamation-triangle/fas-fa-exclamation-triangle.component';
import { FasFaRadiationComponent } from './components/controls/fa-icons/fas-fa-radiation/fas-fa-radiation.component';
import { FasFaRadiationAltComponent } from './components/controls/fa-icons/fas-fa-radiation-alt/fas-fa-radiation-alt.component';
import { FasFaSkullCrossbonesComponent } from './components/controls/fa-icons/fas-fa-skull-crossbones/fas-fa-skull-crossbones.component';
import { FasFaWheelchairComponent } from './components/controls/fa-icons/fas-fa-wheelchair/fas-fa-wheelchair.component';
import { FasFaUniversalAccessComponent } from './components/controls/fa-icons/fas-fa-universal-access/fas-fa-universal-access.component';
import { FasFaTtyComponent } from './components/controls/fa-icons/fas-fa-tty/fas-fa-tty.component';
import { FasFaSignLanguageComponent } from './components/controls/fa-icons/fas-fa-sign-language/fas-fa-sign-language.component';
import { FasFaQuestionCircleComponent } from './components/controls/fa-icons/fas-fa-question-circle/fas-fa-question-circle.component';
import { FasFaPhoneVolumeComponent } from './components/controls/fa-icons/fas-fa-phone-volume/fas-fa-phone-volume.component';
import { FasFaLowVisionComponent } from './components/controls/fa-icons/fas-fa-low-vision/fas-fa-low-vision.component';
import { FasFaDeafComponent } from './components/controls/fa-icons/fas-fa-deaf/fas-fa-deaf.component';
import { FasFaClosedCaptioningComponent } from './components/controls/fa-icons/fas-fa-closed-captioning/fas-fa-closed-captioning.component';
import { FasFaBrailleComponent } from './components/controls/fa-icons/fas-fa-braille/fas-fa-braille.component';
import { FasFaBlindComponent } from './components/controls/fa-icons/fas-fa-blind/fas-fa-blind.component';
import { FasFaAudioDescriptionComponent } from './components/controls/fa-icons/fas-fa-audio-description/fas-fa-audio-description.component';
import { FasFaAssistiveListeningSystemsComponent } from './components/controls/fa-icons/fas-fa-assistive-listening-systems/fas-fa-assistive-listening-systems.component';
import { FasFaAmericanSignLanguageInterpretingComponent } from './components/controls/fa-icons/fas-fa-american-sign-language-interpreting/fas-fa-american-sign-language-interpreting.component';
import { FasFaAngleDoubleDownComponent } from './components/controls/fa-icons/fas-fa-angle-double-down/fas-fa-angle-double-down.component';
import { FasFaAngleDoubleLeftComponent } from './components/controls/fa-icons/fas-fa-angle-double-left/fas-fa-angle-double-left.component';
import { FasFaAngleDoubleRightComponent } from './components/controls/fa-icons/fas-fa-angle-double-right/fas-fa-angle-double-right.component';
import { FasFaAngleDoubleUpComponent } from './components/controls/fa-icons/fas-fa-angle-double-up/fas-fa-angle-double-up.component';
import { FasFaAngleDownComponent } from './components/controls/fa-icons/fas-fa-angle-down/fas-fa-angle-down.component';
import { FasFaAngleLeftComponent } from './components/controls/fa-icons/fas-fa-angle-left/fas-fa-angle-left.component';
import { FasFaAngleRightComponent } from './components/controls/fa-icons/fas-fa-angle-right/fas-fa-angle-right.component';
import { FasFaAngleUpComponent } from './components/controls/fa-icons/fas-fa-angle-up/fas-fa-angle-up.component';
import { FasFaArrowAltCircleDownComponent } from './components/controls/fa-icons/fas-fa-arrow-alt-circle-down/fas-fa-arrow-alt-circle-down.component';
import { FarFaArrowAltCircleDownComponent } from './components/controls/fa-icons/far-fa-arrow-alt-circle-down/far-fa-arrow-alt-circle-down.component';
import { FasFaArrowAltCircleLeftComponent } from './components/controls/fa-icons/fas-fa-arrow-alt-circle-left/fas-fa-arrow-alt-circle-left.component';
import { FarFaArrowAltCircleLeftComponent } from './components/controls/fa-icons/far-fa-arrow-alt-circle-left/far-fa-arrow-alt-circle-left.component';
import { FasFaArrowAltCircleRightComponent } from './components/controls/fa-icons/fas-fa-arrow-alt-circle-right/fas-fa-arrow-alt-circle-right.component';
import { FarFaArrowAltCircleRightComponent } from './components/controls/fa-icons/far-fa-arrow-alt-circle-right/far-fa-arrow-alt-circle-right.component';
import { FasFaArrowAltCircleUpComponent } from './components/controls/fa-icons/fas-fa-arrow-alt-circle-up/fas-fa-arrow-alt-circle-up.component';
import { FarFaArrowAltCircleUpComponent } from './components/controls/fa-icons/far-fa-arrow-alt-circle-up/far-fa-arrow-alt-circle-up.component';
import { FasFaArrowCircleDownComponent } from './components/controls/fa-icons/fas-fa-arrow-circle-down/fas-fa-arrow-circle-down.component';
import { FasFaArrowCircleLeftComponent } from './components/controls/fa-icons/fas-fa-arrow-circle-left/fas-fa-arrow-circle-left.component';
import { FasFaArrowCircleRightComponent } from './components/controls/fa-icons/fas-fa-arrow-circle-right/fas-fa-arrow-circle-right.component';
import { FasFaArrowCircleUpComponent } from './components/controls/fa-icons/fas-fa-arrow-circle-up/fas-fa-arrow-circle-up.component';
import { FasFaArrowDownComponent } from './components/controls/fa-icons/fas-fa-arrow-down/fas-fa-arrow-down.component';
import { FasFaArrowLeftComponent } from './components/controls/fa-icons/fas-fa-arrow-left/fas-fa-arrow-left.component';
import { FasFaArrowRightComponent } from './components/controls/fa-icons/fas-fa-arrow-right/fas-fa-arrow-right.component';
import { FasFaArrowUpComponent } from './components/controls/fa-icons/fas-fa-arrow-up/fas-fa-arrow-up.component';
import { FasFaArrowsAltComponent } from './components/controls/fa-icons/fas-fa-arrows-alt/fas-fa-arrows-alt.component';
import { FasFaArrowsAltHComponent } from './components/controls/fa-icons/fas-fa-arrows-alt-h/fas-fa-arrows-alt-h.component';
import { FasFaArrowsAltVComponent } from './components/controls/fa-icons/fas-fa-arrows-alt-v/fas-fa-arrows-alt-v.component';
import { FasFaCaretDownComponent } from './components/controls/fa-icons/fas-fa-caret-down/fas-fa-caret-down.component';
import { FasFaCaretLeftComponent } from './components/controls/fa-icons/fas-fa-caret-left/fas-fa-caret-left.component';
import { FasFaCaretRightComponent } from './components/controls/fa-icons/fas-fa-caret-right/fas-fa-caret-right.component';
import { FasFaCaretSquareDownComponent } from './components/controls/fa-icons/fas-fa-caret-square-down/fas-fa-caret-square-down.component';
import { FarFaCaretSquareDownComponent } from './components/controls/fa-icons/far-fa-caret-square-down/far-fa-caret-square-down.component';
import { FasFaCaretSquareLeftComponent } from './components/controls/fa-icons/fas-fa-caret-square-left/fas-fa-caret-square-left.component';
import { FarFaCaretSquareLeftComponent } from './components/controls/fa-icons/far-fa-caret-square-left/far-fa-caret-square-left.component';
import { FasFaCaretRightTwoComponent } from './components/controls/fa-icons/fas-fa-caret-right-two/fas-fa-caret-right-two.component';
import { FasFaCaretSquareDownTwoComponent } from './components/controls/fa-icons/fas-fa-caret-square-down-two/fas-fa-caret-square-down-two.component';
import { FarFaCaretSquareDownTwoComponent } from './components/controls/fa-icons/far-fa-caret-square-down-two/far-fa-caret-square-down-two.component';
import { FasFaCaretSquareLeftTwoComponent } from './components/controls/fa-icons/fas-fa-caret-square-left-two/fas-fa-caret-square-left-two.component';
import { FarFaCaretSquareLeftTwoComponent } from './components/controls/fa-icons/far-fa-caret-square-left-two/far-fa-caret-square-left-two.component';
import { FasFaCaretSquareRightComponent } from './components/controls/fa-icons/fas-fa-caret-square-right/fas-fa-caret-square-right.component';
import { FarFaCaretSquareRightComponent } from './components/controls/fa-icons/far-fa-caret-square-right/far-fa-caret-square-right.component';
import { FasFaCaretSquareUpComponent } from './components/controls/fa-icons/fas-fa-caret-square-up/fas-fa-caret-square-up.component';
import { FarFaCaretSquareUpComponent } from './components/controls/fa-icons/far-fa-caret-square-up/far-fa-caret-square-up.component';
import { FasFaCaretUpComponent } from './components/controls/fa-icons/fas-fa-caret-up/fas-fa-caret-up.component';
import { FasFaCartArrowDownComponent } from './components/controls/fa-icons/fas-fa-cart-arrow-down/fas-fa-cart-arrow-down.component';
import { FasFaChartLineComponent } from './components/controls/fa-icons/fas-fa-chart-line/fas-fa-chart-line.component';
import { FasFaChevronCircleDownComponent } from './components/controls/fa-icons/fas-fa-chevron-circle-down/fas-fa-chevron-circle-down.component';
import { FasFaChevronCircleLeftComponent } from './components/controls/fa-icons/fas-fa-chevron-circle-left/fas-fa-chevron-circle-left.component';
import { FasFaChevronCircleRightComponent } from './components/controls/fa-icons/fas-fa-chevron-circle-right/fas-fa-chevron-circle-right.component';
import { FasFaChevronCircleUpComponent } from './components/controls/fa-icons/fas-fa-chevron-circle-up/fas-fa-chevron-circle-up.component';
import { FasFaChevronDownComponent } from './components/controls/fa-icons/fas-fa-chevron-down/fas-fa-chevron-down.component';
import { FasFaChevronLeftComponent } from './components/controls/fa-icons/fas-fa-chevron-left/fas-fa-chevron-left.component';
import { FasFaChevronRightComponent } from './components/controls/fa-icons/fas-fa-chevron-right/fas-fa-chevron-right.component';
import { FasFaChevronUpComponent } from './components/controls/fa-icons/fas-fa-chevron-up/fas-fa-chevron-up.component';
import { FasFaCloudDownloadAltComponent } from './components/controls/fa-icons/fas-fa-cloud-download-alt/fas-fa-cloud-download-alt.component';
import { FasFaCloudUploadAltComponent } from './components/controls/fa-icons/fas-fa-cloud-upload-alt/fas-fa-cloud-upload-alt.component';
import { FasFaCompressAltComponent } from './components/controls/fa-icons/fas-fa-compress-alt/fas-fa-compress-alt.component';
import { FasFaCompressArrowsAltComponent } from './components/controls/fa-icons/fas-fa-compress-arrows-alt/fas-fa-compress-arrows-alt.component';
import { FasFaDownloadComponent } from './components/controls/fa-icons/fas-fa-download/fas-fa-download.component';
import { FasFaExchangeAltComponent } from './components/controls/fa-icons/fas-fa-exchange-alt/fas-fa-exchange-alt.component';
import { FasFaExpandAltComponent } from './components/controls/fa-icons/fas-fa-expand-alt/fas-fa-expand-alt.component';
import { FasFaExpandArrowsAltComponent } from './components/controls/fa-icons/fas-fa-expand-arrows-alt/fas-fa-expand-arrows-alt.component';
import { FasFaExternalLinkAltComponent } from './components/controls/fa-icons/fas-fa-external-link-alt/fas-fa-external-link-alt.component';
import { FasFaExternalLinkSquareAltComponent } from './components/controls/fa-icons/fas-fa-external-link-square-alt/fas-fa-external-link-square-alt.component';
import { FasFaHandPointDownComponent } from './components/controls/fa-icons/fas-fa-hand-point-down/fas-fa-hand-point-down.component';
import { FarFaHandPointDownComponent } from './components/controls/fa-icons/far-fa-hand-point-down/far-fa-hand-point-down.component';
import { FasFaHandPointLeftComponent } from './components/controls/fa-icons/fas-fa-hand-point-left/fas-fa-hand-point-left.component';
import { FarFaHandPointLeftComponent } from './components/controls/fa-icons/far-fa-hand-point-left/far-fa-hand-point-left.component';
import { FasFaHandPointRightComponent } from './components/controls/fa-icons/fas-fa-hand-point-right/fas-fa-hand-point-right.component';
import { FarFaHandPointRightComponent } from './components/controls/fa-icons/far-fa-hand-point-right/far-fa-hand-point-right.component';
import { FasFaHandPointUpComponent } from './components/controls/fa-icons/fas-fa-hand-point-up/fas-fa-hand-point-up.component';
import { FarFaHandPointUpComponent } from './components/controls/fa-icons/far-fa-hand-point-up/far-fa-hand-point-up.component';
import { FasFaHandPointerComponent } from './components/controls/fa-icons/fas-fa-hand-pointer/fas-fa-hand-pointer.component';
import { FarFaHandPointerComponent } from './components/controls/fa-icons/far-fa-hand-pointer/far-fa-hand-pointer.component';
import { FasFaHistoryComponent } from './components/controls/fa-icons/fas-fa-history/fas-fa-history.component';
import { FasFaLevelDownAltComponent } from './components/controls/fa-icons/fas-fa-level-down-alt/fas-fa-level-down-alt.component';
import { FasFaLevelUpAltComponent } from './components/controls/fa-icons/fas-fa-level-up-alt/fas-fa-level-up-alt.component';
import { FasFaLocationArrowComponent } from './components/controls/fa-icons/fas-fa-location-arrow/fas-fa-location-arrow.component';
import { FasFaLongArrowAltDownComponent } from './components/controls/fa-icons/fas-fa-long-arrow-alt-down/fas-fa-long-arrow-alt-down.component';
import { FasFaLongArrowAltLeftComponent } from './components/controls/fa-icons/fas-fa-long-arrow-alt-left/fas-fa-long-arrow-alt-left.component';
import { FasFaLongArrowAltRightComponent } from './components/controls/fa-icons/fas-fa-long-arrow-alt-right/fas-fa-long-arrow-alt-right.component';
import { FasFaLongArrowAltUpComponent } from './components/controls/fa-icons/fas-fa-long-arrow-alt-up/fas-fa-long-arrow-alt-up.component';
import { FasFaMousePointerComponent } from './components/controls/fa-icons/fas-fa-mouse-pointer/fas-fa-mouse-pointer.component';
import { FasFaPlayComponent } from './components/controls/fa-icons/fas-fa-play/fas-fa-play.component';
import { FasFaRandomComponent } from './components/controls/fa-icons/fas-fa-random/fas-fa-random.component';
import { FasFaRecycleComponent } from './components/controls/fa-icons/fas-fa-recycle/fas-fa-recycle.component';
import { FasFaRedoComponent } from './components/controls/fa-icons/fas-fa-redo/fas-fa-redo.component';
import { FasFaRedoAltComponent } from './components/controls/fa-icons/fas-fa-redo-alt/fas-fa-redo-alt.component';
import { FasFaReplyComponent } from './components/controls/fa-icons/fas-fa-reply/fas-fa-reply.component';
import { FasFaReplyAllComponent } from './components/controls/fa-icons/fas-fa-reply-all/fas-fa-reply-all.component';
import { FasFaRetweetComponent } from './components/controls/fa-icons/fas-fa-retweet/fas-fa-retweet.component';
import { FasFaShareComponent } from './components/controls/fa-icons/fas-fa-share/fas-fa-share.component';
import { FasFaShareSquareComponent } from './components/controls/fa-icons/fas-fa-share-square/fas-fa-share-square.component';
import { FarFaShareSquareComponent } from './components/controls/fa-icons/far-fa-share-square/far-fa-share-square.component';
import { FasFaSignInAltComponent } from './components/controls/fa-icons/fas-fa-sign-in-alt/fas-fa-sign-in-alt.component';
import { FasFaSignOutAltComponent } from './components/controls/fa-icons/fas-fa-sign-out-alt/fas-fa-sign-out-alt.component';
import { FasFaSortComponent } from './components/controls/fa-icons/fas-fa-sort/fas-fa-sort.component';
import { FasFaSortAlphaDownComponent } from './components/controls/fa-icons/fas-fa-sort-alpha-down/fas-fa-sort-alpha-down.component';
import { FasFaSortAlphaDownAltComponent } from './components/controls/fa-icons/fas-fa-sort-alpha-down-alt/fas-fa-sort-alpha-down-alt.component';
import { FasFaSortAlphaUpComponent } from './components/controls/fa-icons/fas-fa-sort-alpha-up/fas-fa-sort-alpha-up.component';
import { FasFaSortAlphaUpAltComponent } from './components/controls/fa-icons/fas-fa-sort-alpha-up-alt/fas-fa-sort-alpha-up-alt.component';
import { FasFaSortAmountDownComponent } from './components/controls/fa-icons/fas-fa-sort-amount-down/fas-fa-sort-amount-down.component';
import { FasFaSortAmountDownAltComponent } from './components/controls/fa-icons/fas-fa-sort-amount-down-alt/fas-fa-sort-amount-down-alt.component';
import { FasFaSortAmountUpComponent } from './components/controls/fa-icons/fas-fa-sort-amount-up/fas-fa-sort-amount-up.component';
import { FasFaSortAmountUpAltComponent } from './components/controls/fa-icons/fas-fa-sort-amount-up-alt/fas-fa-sort-amount-up-alt.component';
import { FasFaSortDownComponent } from './components/controls/fa-icons/fas-fa-sort-down/fas-fa-sort-down.component';
import { FasFaSortNumericDownComponent } from './components/controls/fa-icons/fas-fa-sort-numeric-down/fas-fa-sort-numeric-down.component';
import { FasFaSortNumericDownAltComponent } from './components/controls/fa-icons/fas-fa-sort-numeric-down-alt/fas-fa-sort-numeric-down-alt.component';
import { FasFaSortNumericUpComponent } from './components/controls/fa-icons/fas-fa-sort-numeric-up/fas-fa-sort-numeric-up.component';
import { FasFaSortNumericUpAltComponent } from './components/controls/fa-icons/fas-fa-sort-numeric-up-alt/fas-fa-sort-numeric-up-alt.component';
import { FasFaSortUpComponent } from './components/controls/fa-icons/fas-fa-sort-up/fas-fa-sort-up.component';
import { FasFaSyncComponent } from './components/controls/fa-icons/fas-fa-sync/fas-fa-sync.component';
import { FasFaSyncAltComponent } from './components/controls/fa-icons/fas-fa-sync-alt/fas-fa-sync-alt.component';
import { FasFaTextHeightComponent } from './components/controls/fa-icons/fas-fa-text-height/fas-fa-text-height.component';
import { FasFaTextWidthComponent } from './components/controls/fa-icons/fas-fa-text-width/fas-fa-text-width.component';
import { FasFaUndoComponent } from './components/controls/fa-icons/fas-fa-undo/fas-fa-undo.component';
import { FasFaUndoAltComponent } from './components/controls/fa-icons/fas-fa-undo-alt/fas-fa-undo-alt.component';
import { FasFaUploadComponent } from './components/controls/fa-icons/fas-fa-upload/fas-fa-upload.component';
import { FabFaAccessibleIconComponent } from './components/controls/fa-icons/fab-fa-accessible-icon/fab-fa-accessible-icon.component';
import { FarFaClosedCaptioningComponent } from './components/controls/fa-icons/far-fa-closed-captioning/far-fa-closed-captioning.component';
import { FarFaQuestionCircleComponent } from './components/controls/fa-icons/far-fa-question-circle/far-fa-question-circle.component';
import { AllButtonsComponent } from './components/controls/all-buttons/all-buttons.component';
import { BtnDefaultComponent } from './components/controls/all-buttons/btn-default/btn-default.component';
import { BtnDefaultLgComponent } from './components/controls/all-buttons/btn-default-lg/btn-default-lg.component';
import { BtnDefaultSmComponent } from './components/controls/all-buttons/btn-default-sm/btn-default-sm.component';
import { BtnDefaultXsComponent } from './components/controls/all-buttons/btn-default-xs/btn-default-xs.component';
import { BtnDefaultFlatComponent } from './components/controls/all-buttons/btn-default-flat/btn-default-flat.component';
import { BtnDefaultDisabledComponent } from './components/controls/all-buttons/btn-default-disabled/btn-default-disabled.component';
import { BtnPrimaryComponent } from './components/controls/all-buttons/btn-primary/btn-primary.component';
import { BtnPrimaryLgComponent } from './components/controls/all-buttons/btn-primary-lg/btn-primary-lg.component';
import { BtnPrimarySmComponent } from './components/controls/all-buttons/btn-primary-sm/btn-primary-sm.component';
import { BtnPrimaryXsComponent } from './components/controls/all-buttons/btn-primary-xs/btn-primary-xs.component';
import { BtnPrimaryFlatComponent } from './components/controls/all-buttons/btn-primary-flat/btn-primary-flat.component';
import { BtnPrimaryDisabledComponent } from './components/controls/all-buttons/btn-primary-disabled/btn-primary-disabled.component';
import { BtnSecondaryComponent } from './components/controls/all-buttons/btn-secondary/btn-secondary.component';
import { BtnSecondaryLgComponent } from './components/controls/all-buttons/btn-secondary-lg/btn-secondary-lg.component';
import { BtnSecondarySmComponent } from './components/controls/all-buttons/btn-secondary-sm/btn-secondary-sm.component';
import { BtnSecondaryXsComponent } from './components/controls/all-buttons/btn-secondary-xs/btn-secondary-xs.component';
import { BtnSecondaryFlatComponent } from './components/controls/all-buttons/btn-secondary-flat/btn-secondary-flat.component';
import { BtnSecondaryDisabledComponent } from './components/controls/all-buttons/btn-secondary-disabled/btn-secondary-disabled.component';
import { BtnSuccessComponent } from './components/controls/all-buttons/btn-success/btn-success.component';
import { BtnSuccessLgComponent } from './components/controls/all-buttons/btn-success-lg/btn-success-lg.component';
import { BtnSuccessSmComponent } from './components/controls/all-buttons/btn-success-sm/btn-success-sm.component';
import { BtnSuccessXsComponent } from './components/controls/all-buttons/btn-success-xs/btn-success-xs.component';
import { BtnSuccessFlatComponent } from './components/controls/all-buttons/btn-success-flat/btn-success-flat.component';
import { BtnSuccessDisabledComponent } from './components/controls/all-buttons/btn-success-disabled/btn-success-disabled.component';
import { BtnInfoComponent } from './components/controls/all-buttons/btn-info/btn-info.component';
import { BtnInfoLgComponent } from './components/controls/all-buttons/btn-info-lg/btn-info-lg.component';
import { BtnInfoSmComponent } from './components/controls/all-buttons/btn-info-sm/btn-info-sm.component';
import { BtnInfoXsComponent } from './components/controls/all-buttons/btn-info-xs/btn-info-xs.component';
import { BtnInfoFlatComponent } from './components/controls/all-buttons/btn-info-flat/btn-info-flat.component';
import { BtnInfoDisabledComponent } from './components/controls/all-buttons/btn-info-disabled/btn-info-disabled.component';
import { BtnDangerComponent } from './components/controls/all-buttons/btn-danger/btn-danger.component';
import { BtnDangerLgComponent } from './components/controls/all-buttons/btn-danger-lg/btn-danger-lg.component';
import { BtnDangerSmComponent } from './components/controls/all-buttons/btn-danger-sm/btn-danger-sm.component';
import { BtnDangerXsComponent } from './components/controls/all-buttons/btn-danger-xs/btn-danger-xs.component';
import { BtnDangerFlatComponent } from './components/controls/all-buttons/btn-danger-flat/btn-danger-flat.component';
import { BtnDangerDisabledComponent } from './components/controls/all-buttons/btn-danger-disabled/btn-danger-disabled.component';
import { BtnWarningComponent } from './components/controls/all-buttons/btn-warning/btn-warning.component';
import { BtnWarningLgComponent } from './components/controls/all-buttons/btn-warning-lg/btn-warning-lg.component';
import { BtnWarningSmComponent } from './components/controls/all-buttons/btn-warning-sm/btn-warning-sm.component';
import { BtnWarningXsComponent } from './components/controls/all-buttons/btn-warning-xs/btn-warning-xs.component';
import { BtnWarningFlatComponent } from './components/controls/all-buttons/btn-warning-flat/btn-warning-flat.component';
import { BtnWarningDisabledComponent } from './components/controls/all-buttons/btn-warning-disabled/btn-warning-disabled.component';
import { BtnOutlinePrimaryComponent } from './components/controls/all-buttons/btn-outline-primary/btn-outline-primary.component';
import { BtnOutlinePrimaryLgComponent } from './components/controls/all-buttons/btn-outline-primary-lg/btn-outline-primary-lg.component';
import { BtnOutlinePrimarySmComponent } from './components/controls/all-buttons/btn-outline-primary-sm/btn-outline-primary-sm.component';
import { BtnOutlinePrimaryXsComponent } from './components/controls/all-buttons/btn-outline-primary-xs/btn-outline-primary-xs.component';
import { BtnOutlinePrimaryFlatComponent } from './components/controls/all-buttons/btn-outline-primary-flat/btn-outline-primary-flat.component';
import { BtnOutlinePrimaryDisabledComponent } from './components/controls/all-buttons/btn-outline-primary-disabled/btn-outline-primary-disabled.component';
import { BtnOutlineSecondaryComponent } from './components/controls/all-buttons/btn-outline-secondary/btn-outline-secondary.component';
import { BtnOutlineSecondaryLgComponent } from './components/controls/all-buttons/btn-outline-secondary-lg/btn-outline-secondary-lg.component';
import { BtnOutlineSecondarySmComponent } from './components/controls/all-buttons/btn-outline-secondary-sm/btn-outline-secondary-sm.component';
import { BtnOutlineSecondaryXsComponent } from './components/controls/all-buttons/btn-outline-secondary-xs/btn-outline-secondary-xs.component';
import { BtnOutlineSecondaryFlatComponent } from './components/controls/all-buttons/btn-outline-secondary-flat/btn-outline-secondary-flat.component';
import { BtnOutlineSecondaryDisabledComponent } from './components/controls/all-buttons/btn-outline-secondary-disabled/btn-outline-secondary-disabled.component';
import { BtnOutlineSuccessComponent } from './components/controls/all-buttons/btn-outline-success/btn-outline-success.component';
import { BtnOutlineSuccessLgComponent } from './components/controls/all-buttons/btn-outline-success-lg/btn-outline-success-lg.component';
import { BtnOutlineSuccessSmComponent } from './components/controls/all-buttons/btn-outline-success-sm/btn-outline-success-sm.component';
import { BtnOutlineSuccessXsComponent } from './components/controls/all-buttons/btn-outline-success-xs/btn-outline-success-xs.component';
import { BtnOutlineSuccessFlatComponent } from './components/controls/all-buttons/btn-outline-success-flat/btn-outline-success-flat.component';
import { BtnOutlineSuccessDisabledComponent } from './components/controls/all-buttons/btn-outline-success-disabled/btn-outline-success-disabled.component';
import { BtnOutlineInfoComponent } from './components/controls/all-buttons/btn-outline-info/btn-outline-info.component';
import { BtnOutlineInfoLgComponent } from './components/controls/all-buttons/btn-outline-info-lg/btn-outline-info-lg.component';
import { BtnOutlineInfoSmComponent } from './components/controls/all-buttons/btn-outline-info-sm/btn-outline-info-sm.component';
import { BtnOutlineInfoXsComponent } from './components/controls/all-buttons/btn-outline-info-xs/btn-outline-info-xs.component';
import { BtnOutlineInfoFlatComponent } from './components/controls/all-buttons/btn-outline-info-flat/btn-outline-info-flat.component';
import { BtnOutlineInfoDisabledComponent } from './components/controls/all-buttons/btn-outline-info-disabled/btn-outline-info-disabled.component';
import { BtnOutlineDangerComponent } from './components/controls/all-buttons/btn-outline-danger/btn-outline-danger.component';
import { BtnOutlineDangerLgComponent } from './components/controls/all-buttons/btn-outline-danger-lg/btn-outline-danger-lg.component';
import { BtnOutlineDangerSmComponent } from './components/controls/all-buttons/btn-outline-danger-sm/btn-outline-danger-sm.component';
import { BtnOutlineDangerXsComponent } from './components/controls/all-buttons/btn-outline-danger-xs/btn-outline-danger-xs.component';
import { BtnOutlineDangerFlatComponent } from './components/controls/all-buttons/btn-outline-danger-flat/btn-outline-danger-flat.component';
import { BtnOutlineDangerDisabledComponent } from './components/controls/all-buttons/btn-outline-danger-disabled/btn-outline-danger-disabled.component';
import { BtnOutlineWarningComponent } from './components/controls/all-buttons/btn-outline-warning/btn-outline-warning.component';
import { BtnOutlineWarningLgComponent } from './components/controls/all-buttons/btn-outline-warning-lg/btn-outline-warning-lg.component';
import { BtnOutlineWarningSmComponent } from './components/controls/all-buttons/btn-outline-warning-sm/btn-outline-warning-sm.component';
import { BtnOutlineWarningXsComponent } from './components/controls/all-buttons/btn-outline-warning-xs/btn-outline-warning-xs.component';
import { BtnOutlineWarningFlatComponent } from './components/controls/all-buttons/btn-outline-warning-flat/btn-outline-warning-flat.component';
import { BtnOutlineWarningDisabledComponent } from './components/controls/all-buttons/btn-outline-warning-disabled/btn-outline-warning-disabled.component';
import { BtnBgGradientPrimaryComponent } from './components/controls/all-buttons/btn-bg-gradient-primary/btn-bg-gradient-primary.component';
import { BtnBgGradientPrimaryLgComponent } from './components/controls/all-buttons/btn-bg-gradient-primary-lg/btn-bg-gradient-primary-lg.component';
import { BtnBgGradientPrimarySmComponent } from './components/controls/all-buttons/btn-bg-gradient-primary-sm/btn-bg-gradient-primary-sm.component';
import { BtnBgGradientPrimaryXsComponent } from './components/controls/all-buttons/btn-bg-gradient-primary-xs/btn-bg-gradient-primary-xs.component';
import { BtnBgGradientPrimaryFlatComponent } from './components/controls/all-buttons/btn-bg-gradient-primary-flat/btn-bg-gradient-primary-flat.component';
import { BtnBgGradientPrimaryDisabledComponent } from './components/controls/all-buttons/btn-bg-gradient-primary-disabled/btn-bg-gradient-primary-disabled.component';
import { BtnBgGradientSecondaryComponent } from './components/controls/all-buttons/btn-bg-gradient-secondary/btn-bg-gradient-secondary.component';
import { BtnBgGradientSecondaryLgComponent } from './components/controls/all-buttons/btn-bg-gradient-secondary-lg/btn-bg-gradient-secondary-lg.component';
import { BtnBgGradientSecondarySmComponent } from './components/controls/all-buttons/btn-bg-gradient-secondary-sm/btn-bg-gradient-secondary-sm.component';
import { BtnBgGradientSecondaryXsComponent } from './components/controls/all-buttons/btn-bg-gradient-secondary-xs/btn-bg-gradient-secondary-xs.component';
import { BtnBgGradientSecondaryFlatComponent } from './components/controls/all-buttons/btn-bg-gradient-secondary-flat/btn-bg-gradient-secondary-flat.component';
import { BtnBgGradientSecondaryDisabledComponent } from './components/controls/all-buttons/btn-bg-gradient-secondary-disabled/btn-bg-gradient-secondary-disabled.component';
import { BtnBgGradientSucessComponent } from './components/controls/all-buttons/btn-bg-gradient-sucess/btn-bg-gradient-sucess.component';
import { BtnBgGradientSucessLgComponent } from './components/controls/all-buttons/btn-bg-gradient-sucess-lg/btn-bg-gradient-sucess-lg.component';
import { BtnBgGradientSucessSmComponent } from './components/controls/all-buttons/btn-bg-gradient-sucess-sm/btn-bg-gradient-sucess-sm.component';
import { BtnBgGradientSucessXsComponent } from './components/controls/all-buttons/btn-bg-gradient-sucess-xs/btn-bg-gradient-sucess-xs.component';
import { BtnBgGradientSucessFlatComponent } from './components/controls/all-buttons/btn-bg-gradient-sucess-flat/btn-bg-gradient-sucess-flat.component';
import { BtnBgGradientSucessDisabledComponent } from './components/controls/all-buttons/btn-bg-gradient-sucess-disabled/btn-bg-gradient-sucess-disabled.component';
import { BtnBgGradientInfoComponent } from './components/controls/all-buttons/btn-bg-gradient-info/btn-bg-gradient-info.component';
import { BtnBgGradientInfoLgComponent } from './components/controls/all-buttons/btn-bg-gradient-info-lg/btn-bg-gradient-info-lg.component';
import { BtnBgGradientInfoSmComponent } from './components/controls/all-buttons/btn-bg-gradient-info-sm/btn-bg-gradient-info-sm.component';
import { BtnBgGradientInfoXsComponent } from './components/controls/all-buttons/btn-bg-gradient-info-xs/btn-bg-gradient-info-xs.component';
import { BtnBgGradientInfoFlatComponent } from './components/controls/all-buttons/btn-bg-gradient-info-flat/btn-bg-gradient-info-flat.component';
import { BtnBgGradientInfoDisabledComponent } from './components/controls/all-buttons/btn-bg-gradient-info-disabled/btn-bg-gradient-info-disabled.component';
import { BtnBgGradientDangerComponent } from './components/controls/all-buttons/btn-bg-gradient-danger/btn-bg-gradient-danger.component';
import { BtnBgGradientDangerLgComponent } from './components/controls/all-buttons/btn-bg-gradient-danger-lg/btn-bg-gradient-danger-lg.component';
import { BtnBgGradientDangerSmComponent } from './components/controls/all-buttons/btn-bg-gradient-danger-sm/btn-bg-gradient-danger-sm.component';
import { BtnBgGradientDangerXsComponent } from './components/controls/all-buttons/btn-bg-gradient-danger-xs/btn-bg-gradient-danger-xs.component';
import { BtnBgGradientDangerFlatComponent } from './components/controls/all-buttons/btn-bg-gradient-danger-flat/btn-bg-gradient-danger-flat.component';
import { BtnBgGradientDangerDisabledComponent } from './components/controls/all-buttons/btn-bg-gradient-danger-disabled/btn-bg-gradient-danger-disabled.component';
import { BtnBgGradientWarningComponent } from './components/controls/all-buttons/btn-bg-gradient-warning/btn-bg-gradient-warning.component';
import { BtnBgGradientWarningLgComponent } from './components/controls/all-buttons/btn-bg-gradient-warning-lg/btn-bg-gradient-warning-lg.component';
import { BtnBgGradientWarningSmComponent } from './components/controls/all-buttons/btn-bg-gradient-warning-sm/btn-bg-gradient-warning-sm.component';
import { BtnBgGradientWarningXsComponent } from './components/controls/all-buttons/btn-bg-gradient-warning-xs/btn-bg-gradient-warning-xs.component';
import { BtnBgGradientWarningFlatComponent } from './components/controls/all-buttons/btn-bg-gradient-warning-flat/btn-bg-gradient-warning-flat.component';
import { BtnBgGradientWarningDisabledComponent } from './components/controls/all-buttons/btn-bg-gradient-warning-disabled/btn-bg-gradient-warning-disabled.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SlideMenuComponent } from './components/controls/slide-menu/slide-menu.component';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { MainHeaderComponent } from './components/controls/main-header/main-header.component';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    MenuDetailsComponent,
    LayoutComponent,
    ErrorComponent,
    ColorPalettePrimaryComponent,
    ColorPaletteSecondaryComponent,
    ColorPaletteInfoComponent,
    ColorPaletteSuccessComponent,
    ColorPaletteWarningComponent,
    ColorPaletteDangerComponent,
    ColorPaletteBlackComponent,
    ColorPaletteGrayDarkComponent,
    ColorPaletteGrayComponent,
    ColorPaletteLightComponent,
    ColorPaletteIndigoComponent,
    ColorPaletteLightblueComponent,
    ColorPaletteNavyComponent,
    ColorPalettePurpleComponent,
    ColorPaletteFuchsiaComponent,
    ColorPalettePinkComponent,
    ColorPaletteMaroonComponent,
    ColorPaletteOrangeComponent,
    ColorPaletteLimeComponent,
    ColorPaletteTealComponent,
    ColorPaletteOliveComponent,
    GeneralComponent,
    IconsComponent,
    ButtonsComponent,
    SlidersComponent,
    ModalsAndAlertsComponent,
    NavbarAndTabsComponent,
    TimelineComponent,
    RibbonsComponent,
    FaIconsComponent,
    FasFaBellComponent,
    FarFaBellComponent,
    FasFaBellSlashComponent,
    FarFaBellSlashComponent,
    FasFaExclamationComponent,
    FasFaExclamationCircleComponent,
    FasFaExclamationTriangleComponent,
    FasFaRadiationComponent,
    FasFaRadiationAltComponent,
    FasFaSkullCrossbonesComponent,
    FasFaWheelchairComponent,
    FasFaUniversalAccessComponent,
    FasFaTtyComponent,
    FasFaSignLanguageComponent,
    FasFaQuestionCircleComponent,
    FarFaQuestionCircleComponent,
    FasFaPhoneVolumeComponent,
    FasFaLowVisionComponent,
    FasFaDeafComponent,
    FasFaClosedCaptioningComponent,
    FarFaClosedCaptioningComponent,
    FasFaBrailleComponent,
    FasFaBlindComponent,
    FasFaAudioDescriptionComponent,
    FasFaAssistiveListeningSystemsComponent,
    FasFaAmericanSignLanguageInterpretingComponent,
    FasFaAngleDoubleDownComponent,
    FasFaAngleDoubleLeftComponent,
    FasFaAngleDoubleRightComponent,
    FasFaAngleDoubleUpComponent,
    FasFaAngleDownComponent,
    FasFaAngleLeftComponent,
    FasFaAngleRightComponent,
    FasFaAngleUpComponent,
    FasFaArrowAltCircleDownComponent,
    FarFaArrowAltCircleDownComponent,
    FasFaArrowAltCircleLeftComponent,
    FarFaArrowAltCircleLeftComponent,
    FasFaArrowAltCircleRightComponent,
    FarFaArrowAltCircleRightComponent,
    FasFaArrowAltCircleUpComponent,
    FarFaArrowAltCircleUpComponent,
    FasFaArrowCircleDownComponent,
    FasFaArrowCircleLeftComponent,
    FasFaArrowCircleRightComponent,
    FasFaArrowCircleUpComponent,
    FasFaArrowDownComponent,
    FasFaArrowLeftComponent,
    FasFaArrowRightComponent,
    FasFaArrowUpComponent,
    FasFaArrowsAltComponent,
    FasFaArrowsAltHComponent,
    FasFaArrowsAltVComponent,
    FasFaCaretDownComponent,
    FasFaCaretLeftComponent,
    FasFaCaretRightComponent,
    FasFaCaretSquareDownComponent,
    FarFaCaretSquareDownComponent,
    FasFaCaretSquareLeftComponent,
    FarFaCaretSquareLeftComponent,
    FasFaCaretRightTwoComponent,
    FasFaCaretSquareDownTwoComponent,
    FarFaCaretSquareDownTwoComponent,
    FasFaCaretSquareLeftTwoComponent,
    FarFaCaretSquareLeftTwoComponent,
    FasFaCaretSquareRightComponent,
    FarFaCaretSquareRightComponent,
    FasFaCaretSquareUpComponent,
    FarFaCaretSquareUpComponent,
    FasFaCaretUpComponent,
    FasFaCartArrowDownComponent,
    FasFaChartLineComponent,
    FasFaChevronCircleDownComponent,
    FasFaChevronCircleLeftComponent,
    FasFaChevronCircleRightComponent,
    FasFaChevronCircleUpComponent,
    FasFaChevronDownComponent,
    FasFaChevronLeftComponent,
    FasFaChevronRightComponent,
    FasFaChevronUpComponent,
    FasFaCloudDownloadAltComponent,
    FasFaCloudUploadAltComponent,
    FasFaCompressAltComponent,
    FasFaCompressArrowsAltComponent,
    FasFaDownloadComponent,
    FasFaExchangeAltComponent,
    FasFaExpandAltComponent,
    FasFaExpandArrowsAltComponent,
    FasFaExternalLinkAltComponent,
    FasFaExternalLinkSquareAltComponent,
    FasFaHandPointDownComponent,
    FarFaHandPointDownComponent,
    FasFaHandPointLeftComponent,
    FarFaHandPointLeftComponent,
    FasFaHandPointRightComponent,
    FarFaHandPointRightComponent,
    FasFaHandPointUpComponent,
    FarFaHandPointUpComponent,
    FasFaHandPointerComponent,
    FarFaHandPointerComponent,
    FasFaHistoryComponent,
    FasFaLevelDownAltComponent,
    FasFaLevelUpAltComponent,
    FasFaLocationArrowComponent,
    FasFaLongArrowAltDownComponent,
    FasFaLongArrowAltLeftComponent,
    FasFaLongArrowAltRightComponent,
    FasFaLongArrowAltUpComponent,
    FasFaMousePointerComponent,
    FasFaPlayComponent,
    FasFaRandomComponent,
    FasFaRecycleComponent,
    FasFaRedoComponent,
    FasFaRedoAltComponent,
    FasFaReplyComponent,
    FasFaReplyAllComponent,
    FasFaRetweetComponent,
    FasFaShareComponent,
    FasFaShareSquareComponent,
    FarFaShareSquareComponent,
    FasFaSignInAltComponent,
    FasFaSignOutAltComponent,
    FasFaSortComponent,
    FasFaSortAlphaDownComponent,
    FasFaSortAlphaDownAltComponent,
    FasFaSortAlphaUpComponent,
    FasFaSortAlphaUpAltComponent,
    FasFaSortAmountDownComponent,
    FasFaSortAmountDownAltComponent,
    FasFaSortAmountUpComponent,
    FasFaSortAmountUpAltComponent,
    FasFaSortDownComponent,
    FasFaSortNumericDownComponent,
    FasFaSortNumericDownAltComponent,
    FasFaSortNumericUpComponent,
    FasFaSortNumericUpAltComponent,
    FasFaSortUpComponent,
    FasFaSyncComponent,
    FasFaSyncAltComponent,
    FasFaTextHeightComponent,
    FasFaTextWidthComponent,
    FasFaUndoComponent,
    FasFaUndoAltComponent,
    FasFaUploadComponent,
    FabFaAccessibleIconComponent,
    AllButtonsComponent,
    BtnDefaultComponent,
    BtnDefaultLgComponent,
    BtnDefaultSmComponent,
    BtnDefaultXsComponent,
    BtnDefaultFlatComponent,
    BtnDefaultDisabledComponent,
    BtnPrimaryComponent,
    BtnPrimaryLgComponent,
    BtnPrimarySmComponent,
    BtnPrimaryXsComponent,
    BtnPrimaryFlatComponent,
    BtnPrimaryDisabledComponent,
    BtnSecondaryComponent,
    BtnSecondaryLgComponent,
    BtnSecondarySmComponent,
    BtnSecondaryXsComponent,
    BtnSecondaryFlatComponent,
    BtnSecondaryDisabledComponent,
    BtnSuccessComponent,
    BtnSuccessLgComponent,
    BtnSuccessSmComponent,
    BtnSuccessXsComponent,
    BtnSuccessFlatComponent,
    BtnSuccessDisabledComponent,
    BtnInfoComponent,
    BtnInfoLgComponent,
    BtnInfoSmComponent,
    BtnInfoXsComponent,
    BtnInfoFlatComponent,
    BtnInfoDisabledComponent,
    BtnDangerComponent,
    BtnDangerLgComponent,
    BtnDangerSmComponent,
    BtnDangerXsComponent,
    BtnDangerFlatComponent,
    BtnDangerDisabledComponent,
    BtnWarningComponent,
    BtnWarningLgComponent,
    BtnWarningSmComponent,
    BtnWarningXsComponent,
    BtnWarningFlatComponent,
    BtnWarningDisabledComponent,
    BtnOutlinePrimaryComponent,
    BtnOutlinePrimaryLgComponent,
    BtnOutlinePrimarySmComponent,
    BtnOutlinePrimaryXsComponent,
    BtnOutlinePrimaryFlatComponent,
    BtnOutlinePrimaryDisabledComponent,
    BtnOutlineSecondaryComponent,
    BtnOutlineSecondaryLgComponent,
    BtnOutlineSecondarySmComponent,
    BtnOutlineSecondaryXsComponent,
    BtnOutlineSecondaryFlatComponent,
    BtnOutlineSecondaryDisabledComponent,
    BtnOutlineSuccessComponent,
    BtnOutlineSuccessLgComponent,
    BtnOutlineSuccessSmComponent,
    BtnOutlineSuccessXsComponent,
    BtnOutlineSuccessFlatComponent,
    BtnOutlineSuccessDisabledComponent,
    BtnOutlineInfoComponent,
    BtnOutlineInfoLgComponent,
    BtnOutlineInfoSmComponent,
    BtnOutlineInfoXsComponent,
    BtnOutlineInfoFlatComponent,
    BtnOutlineInfoDisabledComponent,
    BtnOutlineDangerComponent,
    BtnOutlineDangerLgComponent,
    BtnOutlineDangerSmComponent,
    BtnOutlineDangerXsComponent,
    BtnOutlineDangerFlatComponent,
    BtnOutlineDangerDisabledComponent,
    BtnOutlineWarningComponent,
    BtnOutlineWarningLgComponent,
    BtnOutlineWarningSmComponent,
    BtnOutlineWarningXsComponent,
    BtnOutlineWarningFlatComponent,
    BtnOutlineWarningDisabledComponent,
    BtnBgGradientPrimaryComponent,
    BtnBgGradientPrimaryLgComponent,
    BtnBgGradientPrimarySmComponent,
    BtnBgGradientPrimaryXsComponent,
    BtnBgGradientPrimaryFlatComponent,
    BtnBgGradientPrimaryDisabledComponent,
    BtnBgGradientSecondaryComponent,
    BtnBgGradientSecondaryLgComponent,
    BtnBgGradientSecondarySmComponent,
    BtnBgGradientSecondaryXsComponent,
    BtnBgGradientSecondaryFlatComponent,
    BtnBgGradientSecondaryDisabledComponent,
    BtnBgGradientSucessComponent,
    BtnBgGradientSucessLgComponent,
    BtnBgGradientSucessSmComponent,
    BtnBgGradientSucessXsComponent,
    BtnBgGradientSucessFlatComponent,
    BtnBgGradientSucessDisabledComponent,
    BtnBgGradientInfoComponent,
    BtnBgGradientInfoLgComponent,
    BtnBgGradientInfoSmComponent,
    BtnBgGradientInfoXsComponent,
    BtnBgGradientInfoFlatComponent,
    BtnBgGradientInfoDisabledComponent,
    BtnBgGradientDangerComponent,
    BtnBgGradientDangerLgComponent,
    BtnBgGradientDangerSmComponent,
    BtnBgGradientDangerXsComponent,
    BtnBgGradientDangerFlatComponent,
    BtnBgGradientDangerDisabledComponent,
    BtnBgGradientWarningComponent,
    BtnBgGradientWarningLgComponent,
    BtnBgGradientWarningSmComponent,
    BtnBgGradientWarningXsComponent,
    BtnBgGradientWarningFlatComponent,
    BtnBgGradientWarningDisabledComponent,
    SlideMenuComponent,
    SideBarComponent,
    HeaderComponent,
    MainHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsLibModule,
    ButtonModule,
    SidebarModule,
    PasswordModule,
    SlideMenuModule,
    BrowserAnimationsModule,
    SidebarModule,
  ],
  providers: [],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
