import * as apid from '../../../../../api';

export interface OnAirDisplayData {
    display: {
        channelId: apid.ChannelId;
        channelName: string;
        logoSrc?: string;
        time: string;
        name: string;
        description?: string;
        extended?: string;
        digestibility: number; // 0 ~ 100
    };
    schedule: apid.Schedule;
}

export default interface IOnAirState {
    selectedTab: apid.ChannelType | undefined;
    clearData(): void;
    fetchData(option: apid.BroadcastingScheduleOption): Promise<void>;
    updateDigestibility(): void;
    getSchedules(type?: apid.ChannelType): OnAirDisplayData[];
    getTabs(): apid.ChannelType[];
    getUpdateTime(): number;
}
