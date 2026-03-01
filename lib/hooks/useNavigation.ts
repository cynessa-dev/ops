import { useRouter } from "next/navigation";

export function useNavigation() {
    const router = useRouter();

    return {
        goToClient: () => router.push("/dashboard/client"),
        goToContractor: () => router.push("/dashboard/contractor"),
    }
}