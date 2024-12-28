import { DashboardHeader } from "@/components/header/DashboardHeader";
import { DeleteAccount } from "@/components/settings/account/DeleteAccount";
import { AccountInfo } from "@/components/settings/account/AccountInfo";
import { Heading } from "@/components/settings/account/Heading";
import { Separator } from "@/components/ui/separator";
import { checkIfUserCompletedOnboarding } from "@/lib/checkIfUserCompletedOnboarding";
import { AddTaskShortcut } from "@/components/addTaskhortCut/AddTaskShortcut";

const Settings = async () => {
    const session = await checkIfUserCompletedOnboarding("/dashboard/settings");

    return (
        <>
            <DashboardHeader>
                <AddTaskShortcut userId={session.user.id} />
            </DashboardHeader>
            <main>
                <Heading />
                <AccountInfo session={session} />
                <div className="p-4 sm:p-6">
                    <Separator />
                </div>
                <DeleteAccount userEmail={session.user.email!} />
            </main>
        </>
    );
};

export default Settings;