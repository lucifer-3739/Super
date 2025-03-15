"use client";

import { useTranslations } from "next-intl";
import { useToast } from "./use-toast";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { MindMap } from "@prisma/client";
import { useRouter } from "next/navigation";

export const useNewMindMap = (workspaceId: string) => {
  const m = useTranslations("MESSAGES");

  const { toast } = useToast();
  const router = useRouter();

  const { mutate: newMindMap, isPending } = useMutation({
    mutationFn: async () => {
      const { data } = await axios.post(`/api/mind_maps/new`, {
        workspaceId,
      });

      return data;
    },
    onSuccess: (data: MindMap) => {
      toast({
        title: m("SUCCES.MIND_MAP_ADDED"),
      });
      router.push(
        `/dashboard/workspace/${workspaceId}/mind-maps/mind-map/${data.id}/edit`
      );
    },
    onError: (err: AxiosError) => {
      const error = err?.response?.data ? err.response.data : "ERRORS.DEFAULT";

      toast({
        title: m(error),
        variant: "destructive",
      });
    },
    mutationKey: ["newMindMap"],
  });

  return { newMindMap, isPending };
};
