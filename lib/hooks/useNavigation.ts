import { useRouter } from "next/navigation";

export function useNavigation() {
    const router = useRouter();

    return {
        goToManager: () => router.push("/manager"),
    }
}